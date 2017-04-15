/*
- Displays the search result Items
- Knows which Item has been selected.
- Dispatches event when Item has been selected.
*/

import React, { Component } from 'react'
import ItemList from './ItemList'
import ItemTiles from './ItemTiles'
import { connect } from 'react-redux'
import { selectItem, deselectItem } from '../../../../actions'

class Results extends Component {

  constructor (props) {
    super(props)
    this.handleSelectItem = this.handleSelectItem.bind(this)
    this.handleDeselectItem = this.handleDeselectItem.bind(this)
  }

  render () {
    const { items } = this.props
    const listView =  <ItemList
                        items={ items }
                        onSelectItem={this.handleSelectItem}
                        onDeselectItem={this.handleDeselectItem}
                      />
    const tilesView = <ItemTiles
                        items={ items }
                        onSelectItem={this.handleSelectItem}
                        onDeselectItem={this.handleDeselectItem}
                      />

    if (items) {
      switch (this.props.view) {
        case 'list':
          return listView
        case 'tiles':
          return tilesView
        default:
          return listView
      }
    } else {
      return null
    }
  }

  handleSelectItem (id) {
  }

  handleDeselectItem (id) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Results)
