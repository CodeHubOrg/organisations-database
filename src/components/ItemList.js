import React, { Component } from 'react'
import ItemListRow from './ItemListRow'
import { selectItem, deselectItem } from '../actions'
import { connect } from 'react-redux'

const ItemList = ({items, onSelectItem, onDeselectItem}) => {

  let rows = items.map(
    (item, index) => {
      return (
        <ItemListRow
          name = {item.name}
          selected = {item.selected}
          id = {item.id}
          key = {index}
          onSelectItem = {() => onSelectItem(item.id)}
          onDeselectItem = {() => onDeselectItem(item.id)}
          />
        )
      }
    )

    return (
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {rows}
        </tbody>
      </table>
    )
}

const mapStateToProps = (state) => {
  return { "items": state.items }
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)