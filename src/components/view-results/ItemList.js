import React, { Component } from 'react'
import ItemListRow from 'ItemListRow'

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
          onDeselectItem = {() => onDeselectItem()}
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

export default ItemList
