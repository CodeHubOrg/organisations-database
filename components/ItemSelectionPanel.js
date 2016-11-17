import React, { Component } from 'react'

class ItemSelectionPanel extends Component {

    render(){
      let { selectedItem } = this.props
      let name = selectedItem ? selectedItem.name : 'None selected'
	  let description = selectedItem ? selectedItem.description : ''
	  let link = selectedItem ? selectedItem.url : ''
	  let linktext = selectedItem ? 'Link to more info' : ''
	  let imagepath = selectedItem ? selectedItem.imagepath : ''
	  let imagealt = selectedItem ? 'resource_logo' : ''

      return(
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">Selected Item:</h3>
			<h4>{ name }</h4>
          </div>
          <div className="panel-body">
			<img className="resource-image" alt={imagealt} src={imagepath} />
			<p className="resource-descrip">{ description }</p>
			<a href={link}>{ linktext }</a>
		  </div>
        </div>
      )
    }
}

export default ItemSelectionPanel
