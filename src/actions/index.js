// 1) selectItem should create SELECT_ITEM action
// 2) deSelectItem should create DESELECT_ITEM action
// 3) addItem should create ADD_ITEM action
// 4) editItem should create EDIT_ITEM action
// 5) deleteItem should create DELETE_ITEM action
import * as types from '../constants/ActionTypes'
import axios from 'axios'

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
const request = axios.post(url,item)

  return{
    type: types.ADD_ITEM,
    payload: request
  }

}

export function editItem(item){
const url = '/api/items/'+item.id
const request = axios.put(url, item)

  return{
    type: types.EDIT_ITEM,
    payload: request
  }
}

export function deleteItem(itemID){
  return{
    type: types.DELETE_ITEM,
    id: itemID
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
