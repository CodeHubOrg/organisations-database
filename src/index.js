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
import Profile from './components/routes/auth/Profile'
import rootReducer from './reducers'
import '../public/assets/sass/bootstrap.scss'
import '../public/assets/sass/style.scss'
import RequireAuth from './components/routes/auth/requireAuth'
import { AUTH_USER } from './constants/ActionTypes'

const routes = [
    { path: '/', component: App },
    { path: '/admin', component: RequireAuth(Admin) },
    { path: '/new', component: RequireAuth(ItemEdit) },
    { path: '/edit/:id', component: RequireAuth(ItemEdit)},
    { path: '/profile', component: Profile },
    { path: '/profile/:id', component: Profile }
]

fetch('/api/items').then((response) => {
    // polyfill added in webpack loader
    if (response.status !== 200) {
      throw new Error(response.status + ' ' + response.statusText)
    }
    return response.json()
  }).then((json) => {
    let initialState = {'items': json}

    // if you want to use the Redux web dev tools in Chrome, replace the the line starting with
    // "let store = ..." by the following commented lines
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    // let store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

    let store = createStore(rootReducer, initialState, applyMiddleware(reduxThunk, reduxPromise))

    const token = localStorage.getItem("authtoken")

    if (token) {
      store.dispatch({ type: AUTH_USER })
    }

    ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}></Router>
        </Provider>
    ), document.getElementById('root'))
  })
