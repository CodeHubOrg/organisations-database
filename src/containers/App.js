import React, { Component } from 'react'
import ListOrTiles from '../components/ListOrTiles'
import ItemSelectionPanel from '../components/ItemSelectionPanel'
import * as actions from '../actions'
import { Link } from 'react-router'
import Search from '../components/search/Search'
import SelectView from '../components/SelectView'

class App extends Component {
  render () {
    return (
      <div>
        <h1>JavaScript tools and resources</h1>
        <h4>Everything you need to get started with Javascript</h4>
        <br />
        <Search />
        <SelectView />
        <p />
        <ListOrTiles />
        <ItemSelectionPanel />
        <ul>
          <li><Link to={'/admin'}>Admin</Link></li>
        </ul>
      </div>
    )
  }
}

export default App
