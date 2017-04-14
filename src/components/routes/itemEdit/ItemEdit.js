import React, { Component } from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'

import SelectFormField from '../../core/SelectFormField'
import {addItem, editItem, setMessage} from '../../../actions'


class ItemEdit extends Component {  
  constructor(props){
    super(props)
    console.log("the props", props)
    this.state = {
        'item': props.item,
        'message': props.message['message']
    }  
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makePropertyChecker = this.makePropertyChecker.bind(this)
  }


  handleChange(e) {
    let itemUpdates = Object.assign({}, this.state.item)
    let feature = e.target.name
    itemUpdates[feature] = e.target.value
    this.setState({item: itemUpdates})
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.item.id == undefined){
      
      this.props.addItem(this.state.item)
      setTimeout(() => {
        if(this.props.message['message'] == 'Success!'){
            this.setState({message: "Item successfully added"})
        }
      }, 400)
      setTimeout(() => {
        if(this.props.message['message'] == 'Success!'){
          this.props.setMessage('') 
          browserHistory.push('/')
        }
      }, 1200)
    } 

    else {

      this.props.editItem(this.state.item)
      setTimeout(() => {
        if(this.props.message['message'] == 'Updated!'){
            this.setState({message: "Item successfully updated"})
        }
      }, 400)
      setTimeout(() => {
        if(this.props.message['message'] == 'Updated!'){
          this.props.setMessage('') 
          browserHistory.push('/')
        }
      }, 1200)
    }
  }
  
  makePropertyChecker (property) {
    return (value) => {
       if(value == this.state.item[property]){
        return true
      }
      return false
    }    
  }
  checkIsDifficulty (value) {
    return this.makePropertyChecker('difficulty')(value)
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
        selected
    } = this.state.item

    let title = (this.state.item.id === undefined)? 'Add Item': 'Edit Item'
        
    // wonder if there is a better way of doing this!
    const fieldsWithLabels = [
      {'itemkey':'name','value':name,'label':'Title:'},
      {'itemkey':'author','value':author,'label':'Author (if known):'},
      {'itemkey':'linktext','value':linktext,'label':'Link text:'},
      {'itemkey':'linkurl','value':linkurl,'label':'Link URL:'}
    ]
    const radioOptions = ['Beginner','Advanced Beginner','Intermediate','Advanced','Very complex','All levels']
    const selectType = ['Book','Video','Podcast','Online written tutorial','Online interactive','Reference']
    const selectDuration = ['< 3hrs','3 hrs to a day','about a week','several weeks','long','ongoing']

    const getInputFields = (textfield_items) => {
      return textfield_items.map((item, index) => {
        const {itemkey, value, label} = item
        return (<div key={index} className="form--control">
                    <label htmlFor={itemkey}>{label}</label>
                    <input value={value} type="text" name={itemkey} id={itemkey} onChange={this.handleChange} />
                </div>)
      })
    }

    const getRadioButtons = (radioOptions) => {
      return radioOptions.map((option, index) => {
        const label = option.replace(' ','_').toLowerCase()
        // console.log("checked",this.checkIsDifficulty(index))
        return (<div key={index} className="grid__cell u-1/3">
                    <label htmlFor={label}><input id={label} type="radio" value={index} name="difficulty" checked={this.checkIsDifficulty(index)} onChange={this.handleChange} />{option}</label>
                </div>)
      })
    }

    // preparing fields and options to be rendered in the form
    const textFields = getInputFields(fieldsWithLabels)
    const radioButtons = getRadioButtons(radioOptions)
    const selectOptionsType = selectType.map((option) => { return [option, option]})
    const selectOptionsDuration = selectDuration.map((option) => { return [option, option]})
       
    return (

        <div>
          <h1>{title}</h1>
          <form onSubmit={this.handleSubmit} className="form--add" >
            <div className="form--control">
              <label></label>
              <span className="success">{this.state.message}</span>
            </div>

            {textFields}              

            <div className="outer-label">Difficulty:</div>
            <div className="form--control marg-left">
                <radiogroup className="grid"> 
                  {radioButtons}                      
                </radiogroup>
            </div>

            <SelectFormField 
              name="type"
              labelName="Type:"
              options={selectOptionsType}
              defaultVal="Select a resource type"
              val={type}
              callback={this.handleChange}
            />

            <SelectFormField 
              name="duration"
              labelName="Duration:"
              options={selectOptionsDuration}
              defaultVal="Select a duration"
              val={duration}
              callback={this.handleChange}
            />

            <div className="form--control">
                <label className="v-top" htmlFor="description">Description:</label>
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
      'item': state.items.find((item) => {return item.id == ownProps.params.id}),
      'message': state.message
    }
  } 
  return {   
    'item': empty_item, 
    'message':state.message
  }
}

export default connect(mapStateToProps, {addItem, editItem, setMessage})(ItemEdit)
