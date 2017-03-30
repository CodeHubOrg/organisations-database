import React, { Component } from 'react'
import Results from '../components/view-results/Results'
import ItemSelectionPanel from '../components/selection/ItemSelectionPanel'
import * as actions from '../actions'
import { Link } from 'react-router'
import Search from '../components/search/Search'
import SelectView from '../components/view-results/SelectView'

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
        <Results/>
        <ItemSelectionPanel />
        <ul>
          <li><Link to={'/admin'}>Admin</Link></li>
        </ul>
      </div>
    )
  }
}

export default App
