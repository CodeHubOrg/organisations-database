import React, { Component } from 'react'
import ItemTile from './ItemTile'
import { connect } from 'react-redux'

const ItemTiles = ({items}) => {
  let tiles = items.map(
      (item,index) => {
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

const mapStateToProps = (state) => {
  return {"items": state.items}
} 

export default connect(mapStateToProps)(ItemTiles)