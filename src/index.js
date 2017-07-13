import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/routes/app/App'
import Admin from './components/routes/admin/Admin'
import ItemEdit from './components/routes/itemEdit/ItemEdit'
import rootReducer from './reducers'
import '../public/assets/sass/bootstrap.scss'
import '../public/assets/sass/grid.scss'
import '../public/assets/sass/style.scss'

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
    let store = createStore(rootReducer, initialState, applyMiddleware(reduxThunk, reduxPromise))

    ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}></Router>
        </Provider>
    ), document.getElementById('root'))
  })
