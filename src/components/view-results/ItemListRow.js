import React, { Component } from 'react'

class ItemListRow extends Component {

  render () {
    return (
      <tr onClick=
        {
          (this.props.selected)
          ? this.props.onDeselectItem.bind(this)
          : this.props.onSelectItem.bind(this)
        }
      >
        <td className="name">{this.props.name}</td>
        <td className="id">{this.props.id}</td>
      </tr>
    )
  }
}

export default ItemListRow
