// 1) selectItem should create SELECT_ITEM action
// 2) deSelectItem should create DESELECT_ITEM action
// 3) addItem should create ADD_ITEM action
// 4) editItem should create EDIT_ITEM action
// 5) deleteItem should create DELETE_ITEM action

import * as types from '../constants/ActionTypes'
import axios from 'axios'
import { browserHistory } from 'react-router';

// const ROOT_URL = 'http://localhost:3000';  for local development
const ROOT_URL = 'https://resources.javascript101.co.uk';

//Action creators
export function selectItem(itemID){
  console.log('selectItem: ' + itemID)
  return{
    type: types.SELECT_ITEM,
    id: itemID
  }
}

export function deselectItem(itemID){
  return{
    type: types.DESELECT_ITEM,
    id: itemID
  }
}

export function addItem(item){
  const url = '/api/items/'
  const request = axios.post(url, item, {
     headers: { 'authorization': localStorage.getItem('authtoken') }
   })
  return dispatch => {
    dispatch({ 
      type: types.ADD_ITEM,
      payload: request
    })

    return request.then(
      dispatch({
        type: types.SET_MESSAGE,
        payload: 'Success!'
      })
    )
  }
}

export function editItem(item){
  const url = '/api/items/'+item.id
  const request = axios.put(url, item, {
    headers: { 'authorization': localStorage.getItem('authtoken') }
  })
  return dispatch => {
      dispatch({
        type: types.EDIT_ITEM,
        payload: request
      })

      return request.then(
      dispatch({
        type: types.SET_MESSAGE,
        payload: 'Updated!'
      })
    )
  }
}

export function loginUser(gitHubUser) {
  const url = `${ROOT_URL}/checkUser/${gitHubUser}`
  const request = axios.get(url)
    return dispatch => {
      return request.then(
          resp => {                  
            dispatch({ type: types.AUTH_USER })
            localStorage.setItem("authtoken", resp.data.token)
            setTimeout(() => {
              browserHistory.push('/')},
              4000
            )
            return resp.data 
          }).catch(() => {
            dispatch(authError('Login did not succeed'))
        })
    }
}

export function logoutUser() {
    localStorage.removeItem("authtoken");

    return { type: types.UNAUTH_USER }
}


export function authUser(){
  return {
    type: types.AUTH_USER
  }
}



export function unauthUser(){
  return {
    type: types.UNAUTH_USER
  }  
}

export function authError(error) {
    return {
        type: types.AUTH_ERROR,
        error: error
    }
}


export function deleteItem(itemID){
  return{
    type: types.DELETE_ITEM,
    id: itemID
  }
}

export function handleError(error){  
  return {
    type: types.HANDLE_XHR_ERROR,
    error: error
  }
}

export function setMessage(message){
  return {
    type: types.SET_MESSAGE,
    payload: message
  }
}

export function searchItem(searchTerm) {
  return{
    type: types.SEARCH_ITEM,
    term: searchTerm
  }
}

export function selectView(view) {
  return{
    type: types.SELECT_VIEW,
    view: view
  }
}

export function setKeyword (keyword) {
  return {
    type: types.SET_KEYWORD,
    keyword: keyword
  }
}

export function setSearchFilter (category, filter) {
  return {
    type: types.SELECT_FILTER,
    category: category,
    filter: filter
  }
}

export function setSearchResults ( resultItems ) {
  return {
    type: types.SET_SEARCH_RESULTS,
    resultItems: resultItems
  }
}
