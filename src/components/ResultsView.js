/*
- Displays the search result Items
- Knows which Item has been selected. 
- Dispatches event when Item has been selected.
*/

import React, { Component } from 'react'
import ItemList from '../components/ItemList'
import ItemTiles from '../components/ItemTiles'
import { connect } from 'react-redux'
import { selectItem, deselectItem } from '../actions'


const ResultsView = ({items, view, onSelectItem, onDeselectItem}) => {
  if (items) {
    switch (view) {
      case 'list':
        return (
          <ItemList 
          items={ items }
          onSelectItem={onSelectItem}
          onDeselectItem={onDeselectItem}
          />
        )
      case 'tiles':
        return (
          <ItemTiles 
          items={ items } />
        )
      default:
        return (
          <ItemList 
          items={ items } />
        )
    }
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.itemsview.view,
    items: state.searchResults.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onSelectItem: (id) => {
      dispatch(selectItem(id))
    },
    onDeselectItem: (id) => {
      dispatch(deselectItem(id))
    }
  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultsView)
