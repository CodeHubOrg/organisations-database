import React, { Component } from 'react'
import ItemList from '../components/ItemList'
import ItemTiles from '../components/ItemTiles'
import { connect } from 'react-redux'

const ListOrTiles = ({items, view}) => {
  switch(view) {
    case "list": 
    return (
      <ItemList items={ items } />
    )
    case "tiles":
    return (
      <ItemTiles items={ items } />
    )
    default:
    return (
      <ItemList items={ items } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    view: state.itemsview.view
  }
} 

export default connect(mapStateToProps)(ListOrTiles)