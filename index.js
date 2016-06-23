import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './containers/App'
import Admin from './containers/Admin'
import organisations from './reducers'
import './public/assets/css/bootstrap.css'
import './public/assets/css/style.css'

const store = createStore(organisations)
const state = store.getState()

// Log the initial state
console.log(state)

function render() {
    let organisations = store.getState().organisations

    ReactDOM.render((
        <Router history={browserHistory}>
            <Route
                path="/"
                organisations={organisations}
                dispatch={store.dispatch}
                component={App}
            />
            <Route path="/admin" component={Admin}/>
        </Router>
    ), document.getElementById('root'))

}

render()
store.subscribe(render)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(JSON.stringify(store.getState(),null,3))
)
