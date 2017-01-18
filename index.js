import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './containers/App'
import Admin from './containers/Admin'
import ItemAdd from './containers/ItemAdd'
import rootReducer from './reducers/index'
import './public/assets/css/bootstrap.css'
import './public/assets/css/grid.css'
import './public/assets/css/style.css'


const routes = [
    { path: '/', component: App },
    { path: '/admin', component: Admin },
    { path: '/new', component: ItemAdd }
]

// let xhr = new XMLHttpRequest();
// xhr.open('GET', '/api/items' , true);
// xhr.onreadystatechange = function() {
//     let status;
//     let data;

// if (xhr.readyState == 4) {
//     status = xhr.status;
//     if(status == 200) {
//         let data = JSON.parse(xhr.responseText);

        fetch('/api/items').then((response) => {

          if(response.status !== 200) {
            throw new Error(response.status + " " + response.statusText);
          }
          return response.json();

        }).then((json) => {
        
          let initialState = {"items": json};        
          let store = createStore(rootReducer, initialState);       

          function render() {

              ReactDOM.render((
                  <Provider store={store}>
                      <Router history={browserHistory} routes={routes}></Router>
                  </Provider>
              ), document.getElementById('root'))
          }

          Provider.childContextTypes = {
              store: React.PropTypes.object
          };


          store.subscribe(render)
          render()

          // Every time the state changes, log it
          // Note that subscribe() returns a function for unregistering the listener
          let unsubscribe = store.subscribe(() =>
            console.log(JSON.stringify(store.getState(),null,3))
          )

        });

//         }
//     }
// }
// xhr.send(null);
