import React, { Component } from 'react'
import FilterBar from '../components/FilterBar'
import ListOrTiles from '../components/ListOrTiles'
import ItemSelectionPanel from '../components/ItemSelectionPanel'
import * as actions from '../actions'
import { Link } from 'react-router'
import SearchBar from '../components/searchBar'
import SelectView from '../components/SelectView'

const App = () => (
  <div>
    <h1>JavaScript tools and resources</h1>
    <h4>Everything you need to get started with Javascript</h4>
    <br />
    <SearchBar />
    <FilterBar />
    <SelectView />
    <p /> 
    <ListOrTiles />
    <ItemSelectionPanel />
    <ul>
      <li><Link to={'/admin'}>Admin</Link></li>
    </ul>
  </div>
)

export default App