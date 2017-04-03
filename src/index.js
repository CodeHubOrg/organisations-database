import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import App from 'App'
import Admin from 'Admin'
import ItemAdd from 'ItemAdd'
import ItemEdit from 'ItemEdit'
import rootReducer from 'index'
import '../public/assets/css/bootstrap.css'
import '../public/assets/css/grid.css'
import '../public/assets/css/style.css'

const routes = [
    { path: '/', component: App },
    { path: '/admin', component: Admin },
    { path: '/new', component: ItemAdd },
    { path: '/edit/:id', component: ItemEdit }
]

fetch('/api/items').then((response) => {
    // polyfill added in webpack loader
    if (response.status !== 200) {
      throw new Error(response.status + ' ' + response.statusText)
    }
    return response.json()
  }).then((json) => {
    let initialState = {'items': json}
    let store = createStore(rootReducer, initialState)

    ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}></Router>
        </Provider>
    ), document.getElementById('root'))
  })
