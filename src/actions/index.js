// 1) selectItem should create SELECT_ITEM action
// 2) deSelectItem should create DESELECT_ITEM action
// 3) addItem should create ADD_ITEM action
// 4) editItem should create EDIT_ITEM action
// 5) deleteItem should create DELETE_ITEM action
import * as types from '../constants/ActionTypes'

//Action creators
export function selectItem(orgNum){
  console.log('selectItem: ' + orgNum)
  return{
    type: types.SELECT_ITEM,
    id: orgNum
  }

}

export function deselectItem(orgNum){
  return{
    type: types.DESELECT_ITEM,
    id: orgNum
  }

}

export function addItem(orgName){
  return{
    type: types.ADD_ITEM,
    name: orgName
  }

}


export function editItem(orgNum, orgName){
  return{
    type: types.EDIT_ITEM,
    id: orgNum,
    name: orgName
  }

}

export function deleteItem(orgNum){
  return{
    type: types.DELETE_ITEM,
    id: orgNum
  }
}

export function searchItem(searchTerm){
  return{
    type: types.SEARCH_ITEM,
    term: searchTerm
  }
}

export function selectView(view){
  return{
    type: types.SELECT_VIEW,
    view: view
  }
}

export function selectSearchFilter (category, filter) {
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