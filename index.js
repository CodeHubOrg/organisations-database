import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App'
import organisations from './reducers'
import './public/assets/css/bootstrap.css'
import './public/assets/css/style.css'

const store = createStore(organisations)
const state = store.getState()

// Log the initial state
console.log(state)

function render() {
  ReactDOM.render(
    <App
        organisations={state.organisations}
        dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
