/*
- Displays the search result Items
- Knows which Item has been selected.
- Dispatches event when Item has been selected.
*/

import React, { Component } from 'react'
import ItemList from './ItemList'
import ItemTiles from './ItemTiles'
import { connect } from 'react-redux'
import { selectItem, deselectItem } from '../../actions'

class Results extends Component {

  constructor (props) {
    super(props)
    this.handleOnSelectItem = this.handleOnSelectItem.bind(this)
  }

  render () {
    const { items } = this.props
    const listView =  <ItemList
                        items={ items }
                        onSelectItem={this.handleOnSelectItem}
                        onDeselectItem={this.handleOnSelectItem}
                      />
    const tilesView = <ItemTiles
                        items={ items }
                        onSelectItem={this.handleOnSelectItem}
                        onDeselectItem={this.handleOnSelectItem}
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

  handleOnSelectItem (id) {
    console.log('handleOnSelectItem: ' + id)
    // Dispatch action which will set filter state in Redux
      // e.g. ResourceType: url
      //const filter = event.target.value
      //this.props.selectSearchFilter( category, filter )
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
