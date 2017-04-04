import React, { Component } from 'react'

import Results from 'Results'
import ItemTilesAll from '../components/view-results/ItemTilesAll'
import ItemSelectionPanel from 'ItemSelectionPanel'
import * as actions from '../actions'
import { Link } from 'react-router'
import Search from 'Search'
import SelectView from 'SelectView'

class App extends Component {
  render () {
    return (
      <div>
        <h1>JavaScript tools and resources</h1>
        <h4>Everything you need to get started with Javascript</h4>
        <Search />
        <SelectView />
        <Results/>
        <br />&nbsp;<br />
        <ItemTilesAll />
        <ItemSelectionPanel />
        <ul>
          <li><Link to={'/admin'}>Admin</Link></li>
        </ul>
      </div>
    )
  }
}

export default App
