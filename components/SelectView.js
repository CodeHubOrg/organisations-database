import React, { Component } from 'react'
import { selectView } from '../actions'
import { connect } from 'react-redux'

const SelectView = ({itemview, selectView}) => {
  let choice = (itemview === "list") ? "Tiles" : "List"
  let changedview = (itemview === "list") ? "tiles" : "list"  
  return (
    <div>
      <button onClick={() => selectView(changedview)} className="btn btn-info">View as {choice}</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {itemview : state.itemsview.view}
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectView: (view) => {
      dispatch(selectView(view))
    }
  }
} 


export default connect(mapStateToProps, mapDispatchToProps)(SelectView)