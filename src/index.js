import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/routes/app/App'
import Admin from './components/routes/admin/Admin'
import ItemEdit from './components/routes/itemEdit/ItemEdit'
import rootReducer from './reducers'
import '../public/assets/css/bootstrap.css'
import '../public/assets/css/grid.css'
import '../public/assets/css/style.css'
import reduxPromise from 'redux-promise'

const routes = [
    { path: '/', component: App },
    { path: '/admin', component: Admin },
    { path: '/new', component: ItemEdit },
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
    let store = createStore(rootReducer, initialState, applyMiddleware(reduxPromise))

    ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}></Router>
        </Provider>
    ), document.getElementById('root'))
  })
