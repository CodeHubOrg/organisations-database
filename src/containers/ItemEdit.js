import React, { Component } from 'react'
// import * as actions from '../actions'

class ItemEdit extends Component {
  constructor(props){
    super(props); 
    this.state = { 'item': {
        'name' : '',
        'author': '',
        'difficulty': null,
        'linktext': '',
        'linkurl': '',
        'type': '',
        'duration': '',
        'description': '',
        'selected': false },
        'success': false
    }  
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makePropertyChecker = this.makePropertyChecker.bind(this)
    this.checkIsDifficulty = this.checkIsDifficulty.bind(this)
    this.getTypeSelectStatus = this.getTypeSelectStatus.bind(this)     
  }

  componentDidMount () {
    if(this.props.params.id){
      const id = this.props.params.id
      const url = '/api/items/'+id
      fetch(url).then((response) => {
        if(response.status !== 200) {
          throw new Error(response.status + ' ' + response.statusText)
        }
        return response.json()
      }).then((json) => {
        console.log(json)
        this.setState({'item': json})
      })
    }
  }

  handleChange (e) {
    let item_updates = Object.assign({}, this.state.item)
    let property = e.target.name.replace('resource_','')
    item_updates[property] = e.target.value
    this.setState({item: item_updates})
  }
  handleSubmit(e) {
    let self = this
    e.preventDefault();
    const url_update = '/api/items/' + this.state.item.id
    let xhr = new XMLHttpRequest()
    xhr.open('PUT',
    encodeURI(url_update))
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(
        this.state.item        
    ))
    xhr.onload = function(){
      let data = JSON.parse(xhr.responseText)
      if(data.id == self.state.item.id) {
        self.setState({'success':'Data successfully updated'})
        setTimeout(function(){
          if(self.state.sucess != ''){
            self.setState({'success': ''})
            }
          }, 2500
      )}
    }
    xhr.onerror = function(error){
      console.log(error.message)
    }
  }
  
  // higher order functions! :) 
  makePropertyChecker (property) {
    return (value) => {
       if(value == this.state.item[property]){
        return true
      }
    }
  }
  checkIsDifficulty (value) {
    return this.makePropertyChecker('difficulty')(value)
  }
  getTypeSelectStatus (value)  {
    if(this.makePropertyChecker('type')(value)){
      return 'selected'
    }  
  }
  getDurationSelectStatus (value) {
    if(this.makePropertyChecker('duration')(value)){
      return 'selected'
    }  
  }

  render () {
    const { 
        name,
        author,
        difficulty,
        linktext,
        linkurl,
        type,
        duration,
        description,
        selected,
        id
    } = this.state.item
     
    return (        
        <div>
        <h1>Edit</h1>
            <form onSubmit={this.handleSubmit} className="form--add" >
                <div className="form--control">
                  <label></label>
                  <span className="success">{this.state.success}</span>
                </div>  
                <div className="form--control">
                    <label for="resource_name">Title: </label>
                    <input value={name} type="text" name="resource_name" id="name" onChange={this.handleChange} />
                </div>
                <div className="form--control">
                    <label for="resource_author">Author (if known):</label>
                    <input value={author} type="text" name="resource_author" id="author" onChange={this.handleChange} />
                </div>
                <div className="form--control">
                    <label for="resource_linktext">Link text:</label>
                    <input value={linktext} type="text" name="resource_linktext" id="linktextr" onChange={this.handleChange} />
                </div>
                <div className="form--control">
                    <label for="resource_linkurl">Link URL:</label>
                    <input value={linkurl}  type="text" name="resource_linkurl" id="linkurl" onChange={this.handleChange} />
                </div>                

                <div className="outer-label">Difficulty:</div>
                <div className="form--control marg-left">

                    <radiogroup className="grid">
                        <div className="grid__cell u-1/3">
                            <label for="beginner"><input id="beginner" type="radio" value="1" name="resource_difficulty" checked={this.checkIsDifficulty(1)} onChange={this.handleChange} />Beginner</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="adv_beginner"><input id="adv_beginner" type="radio" value="2" name="resource_difficulty" checked={this.checkIsDifficulty(2)} onChange={this.handleChange} />Advanced Beginner</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="intermediate"><input id="intermediate" type="radio" value="3" name="resource_difficulty" checked={this.checkIsDifficulty(3)} onChange={this.handleChange} />Intermediate</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="int_advanced"><input id="int_advanced" type="radio" value="4" name="resource_difficulty" checked={this.checkIsDifficulty(4)} onChange={this.handleChange} />Advanced</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="advanced"><input id="advanced" type="radio" value="5" name="resource_difficulty" checked={this.checkIsDifficulty(5)} onChange={this.handleChange} />Very complex</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="advanced"><input id="all" type="radio" value="6" name="resource_difficulty" checked={this.checkIsDifficulty(6)} onChange={this.handleChange} />All levels</label>
                        </div>
                    </radiogroup>
                </div>
                <div className="form--control">
                    <label for="type">Type:</label>
                    <select id="type" name="resource_type" onChange={this.handleChange} >
                       <option value="Book" ref="resource_type" selected={this.getTypeSelectStatus("Book")}>Book</option>
                        <option value="Video" selected={this.getTypeSelectStatus("Video")}>Video</option>
                        <option value="Podcast" selected={this.getTypeSelectStatus("Podcast")}>Podcast</option>
                        <option value="Online written" selected={this.getTypeSelectStatus("Online written")}>Online written tutorial</option>
                        <option value="Online interactive" selected={this.getTypeSelectStatus("Online interactive")}>Online interactive</option>
                        <option value="Reference" selected={this.getTypeSelectStatus("Reference")}>Reference</option>
                    </select>
                </div>
                <div className="form--control">
                    <label for="duration">Duration:</label>
                    <select name="resource_duration" id="duration" onChange={this.handleChange}>
                        <option value="3hrs" selected={this.getDurationSelectStatus("3hrs")} >&lt; 3 hrs</option>
                        <option value="1day" selected={this.getDurationSelectStatus("1day")}>3 hrs to a day</option>
                        <option value="1week" selected={this.getDurationSelectStatus("1week")}>about a week</option>
                        <option value="weeks" selected={this.getDurationSelectStatus("weeks")}>several weeks</option>
                        <option value="long" selected={this.getDurationSelectStatus("long")}>long</option>
                        <option value="ongoing" selected={this.getDurationSelectStatus("ongoing")}>ongoing</option>
                    </select>
                </div>
                <div className="form--control">
                    <label className="v-top" for="description">Description:</label>
                    <textarea col="10" rows="5" name="resource_description" id="description" value={description} onChange={this.handleChange}  />                    
                </div>
                <div className="form--control marg-left">
                    <input className="btn btn--submit" type="submit" value="Post" />
                </div>
            </form>
        </div>
    )
  }
}

export default ItemEdit
