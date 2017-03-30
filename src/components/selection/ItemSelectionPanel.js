import React, { Component } from 'react'
import { connect } from 'react-redux' 

const ItemSelectionPanel = ({item}) => (

<div className="panel">
  <div className="panel-heading">
   <h3 className="panel-title">Selected Item:</h3>
   <h4>{ item.name }</h4>
  </div>
</div>  

)

const mapStateToProps = (state) => {
  let selected = state.items.find(
    function(item){
      return item.selected == true
    }
  )
  if (selected === undefined){
    selected =  {name: "None"}
  }
  return { "item": selected }
}

export default connect(mapStateToProps)(ItemSelectionPanel)
