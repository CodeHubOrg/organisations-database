import React, { Component } from 'react'
import { Link } from 'react-router'
import * as actions from '../../../actions'
import Search from './search'
import SelectView from './results/SelectView'
import Results from './results'

class App extends Component {

  render () {
    return (
      <div>
        <h1>JavaScript tools and Resources</h1>
        <h4>Everything you need to get started with Javascript</h4>
        <Search />      
        <Link to={'/new'}><button>Add a Resource</button></Link>
        <p>&nbsp;</p>
        <SelectView />
        <Results />
        <Link className="btn btn-info" to={'/admin'}>Admin</Link>
      </div>
      )
    }
}

export default App
