// 1) selectOrganisation should create SELECT_ORGANISATION action
// 2) deSelectOrganisation should create DESELECT_ORGANISATION action
// 3) addOrganisation should create ADD_ORGANISATION action
// 4) editOrganisation should create EDIT_ORGANISATION action
// 5) deleteOrganisation should create DELETE_ORGANISATION action
import * as types from '../constants/ActionTypes'

//Action creators
export function selectOrganisation(orgNum){
  return{
    type: types.SELECT_ORGANISATION,
    id: orgNum
  }

}

export function deSelectOrganisation(orgNum){
  return{
    type: types.DESELECT_ORGANISATION,
    id: orgNum
  }

}

export function addOrganisation(orgName){
  return{
    type: types.ADD_ORGANISATION,
    name: orgName
  }

}


export function editOrganisation(orgNum, orgName){
  return{
    type: types.EDIT_ORGANISATION,
    id: orgNum,
    name: orgName
  }

}


export function deleteOrganisation(orgNum){
  return{
    type: types.DELETE_ORGANISATION,
    id: orgNum
  }
}


export function updateForm(input, formId){
  return{
    type: types.UPDATE_FORM,
    id: formId,
    value: input
  }
}