/* eslint-env mocha */
import React, { Component } from 'react'
import { expect } from 'chai'
import App from '../../src/containers/App'
import { shallow, mount } from 'enzyme'

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../src/reducers/index'

import SearchBar from '../../src/components/searchBar'
import SelectView from '../../src/components/SelectView'
import ListOrTiles from '../../src/components/ListOrTiles'
import ItemSelectionPanel from '../../src/components/ItemSelectionPanel'


const initialState = {
  items : [
    { 
      'name' : 'Eloquent JS',
      'author': 'Marijn Haverbeke'
    },
    {
      'name': 'JS the Good Parts',
      'author': 'D Crockford'
    }
  ]
}
const store = createStore(rootReducer,initialState)
const AppComponent = mount(
    <Provider store={store}>
      <App />
    </Provider>
)

describe('App container', () => {
  it('should contain a ListOrTiles component', () => {
    expect(AppComponent.find(ListOrTiles)).has.lengthOf(1)
  })
  it('should display a title', () => {
    expect(AppComponent.contains(<h1>JavaScript tools and resources</h1>)).to.be.true
  })
})