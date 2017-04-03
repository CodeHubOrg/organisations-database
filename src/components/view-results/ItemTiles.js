import React, { Component } from 'react'
import ItemTile from 'ItemTile'

const ItemTiles = ({items}) => {
  let tiles = items.map(
      (item, index) => {
        return (
          <ItemTile resource={item} key={index} />
        )
      }
    )

  return (
    <div className = "grid">
      { tiles }
    </div>
  )
}

export default ItemTiles
