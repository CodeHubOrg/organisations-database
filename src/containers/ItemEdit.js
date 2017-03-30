import React, { Component } from 'react'
import { connect } from 'react-redux'


class ItemEdit extends Component {  
  constructor(props){
    super(props); 
    this.state = {
        'item': props.item,
        'success': false
    }  
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makePropertyChecker = this.makePropertyChecker.bind(this)
    // this.checkIsDifficulty = this.checkIsDifficulty.bind(this)
    // this.getTypeSelectStatus = this.getTypeSelectStatus.bind(this)     
  }

  handleChange (e) {
    let item_updates = Object.assign({}, this.state.item)
    let feature = e.target.name
    item_updates[feature] = e.target.value
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
          if(self.state.success != ''){
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
  // getTypeSelectStatus (value)  {
  //   if(this.makePropertyChecker('type')(value)){
  //     return 'selected'
  //   }  
  // }
  // getDurationSelectStatus (value) {
  //   if(this.makePropertyChecker('duration')(value)){
  //     return 'selected'
  //   }  
  // }

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
        
    // wonder if there is a better way of doing this!
    const fields_with_labels = [
      {'itemkey':'name','value':name,'label':'Title:'},
      {'itemkey':'author','value':author,'label':'Author (if known):'},
      {'itemkey':'linktext','value':linktext,'label':'Link text:'},
      {'itemkey':'linkurl','value':linkurl,'label':'Link URL:'}
    ]
    const radio_options = ['Beginner','Advanced Beginner','Intermediate','Advanced','Very complex','All levels']
    const select_options_type = ['Book','Video','Podcast','Online written tutorial','Online interactive','Reference']
    const select_options_duration = ['< 3hrs','3 hrs to a day','about a week','several weeks','long','ongoing']
    
    
    const getInputFields = (textfield_items) => {
      return textfield_items.map((item, index) => {
        const {itemkey, value, label} = item
        return (<div className="form--control">
                    <label for={itemkey}>{label}</label>
                    <input key={index} value={value} type="text" name={itemkey} id={itemkey} onChange={this.handleChange} />
                </div>)
      })
    }

    const getRadioButtons = (radio_options) => {
      return radio_options.map((option, index) => {
        const label = option.replace(' ','_').toLowerCase()
        console.log("Index",index)
        console.log("checked", this.checkIsDifficulty(index))
        return (<div className="grid__cell u-1/3">
                    <label for={label}><input key={index} id={label} type="radio" value={index} name="difficulty" checked={this.checkIsDifficulty(index)} onChange={this.handleChange} />{option}</label>
                </div>)
      })
    }

    const getSelectOptions = (select_options) => {
      return select_options.map((option, index) => {
        return <option key={index} value={option}>{option}</option>
      })
    }

    // eventually the options should be fetched from somewhere, not hardcoded in
    const text_fields = getInputFields(fields_with_labels)
    const radio_buttons = getRadioButtons(radio_options)
    const type_select_options = getSelectOptions(select_options_type)
    const duration_select_options = getSelectOptions(select_options_duration)
    
    return ( 
        <div>
        <h1>Edit</h1>
            <form onSubmit={this.handleSubmit} className="form--add" >
                <div className="form--control">
                  <label></label>
                  <span className="success">{this.state.success}</span>
                </div>

                {text_fields}              

                <div className="outer-label">Difficulty:</div>
                <div className="form--control marg-left">
                    <radiogroup className="grid"> 
                      {radio_buttons}                      
                    </radiogroup>
                </div>
                <div className="form--control">
                    <label for="type">Type:</label>
                    <select id="type" name="type" value={type} onChange={this.handleChange} >
                      {type_select_options}
                    </select>
                </div>
                <div className="form--control">
                    <label for="duration">Duration:</label>
                    <select name="duration" id="duration" value={duration} onChange={this.handleChange}>
                      {duration_select_options}
                    </select>
                </div>
                <div className="form--control">
                    <label className="v-top" for="description">Description:</label>
                    <textarea col="10" rows="5" name="description" id="description" value={description} onChange={this.handleChange}  />                    
                </div>
                <div className="form--control marg-left">
                    <input className="btn btn--submit" type="submit" value="Post" />
                </div>
            </form>
        </div>
    )
  }
}

// not sure if necessary but might be good to have when using this component for adding, too
let empty_item =  {
        'name' : '',
        'author': '',
        'difficulty': null,
        'linktext': '',
        'linkurl': '',
        'type': '',
        'duration': '',
        'description': '',
        'selected': false 
      }

const mapStateToProps = (state, ownProps) => {
  if(ownProps.params.id){
    return {
      'item': state.items.find((item) => {return item.id == ownProps.params.id})
    }
  } 
  return {'item': empty_item}
}

export default connect(mapStateToProps)(ItemEdit)
