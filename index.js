import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './containers/App'
import Admin from './containers/Admin'
import New from './containers/New'
import rootReducer from './reducers/index'
import './public/assets/css/bootstrap.css'
import './public/assets/css/style.css'


const store = createStore(rootReducer);

const routes = [
    { path: '/', component: App },
    { path: '/admin', component: Admin },
    { path: '/new', component: New }
]

Provider.childContextTypes = {
    store: React.PropTypes.object
};

// Log the initial state
// console.log(store.getState())

function render() {
    ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}></Router>
        </Provider>
    ), document.getElementById('root'))
}

store.subscribe(render)
render()

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(JSON.stringify(store.getState(),null,3))
)
