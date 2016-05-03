// 1) selectOrganisation should create SELECT_ORGANISATION action
// 2) deSelectOrganisation should create DESELECT_ORGANISATION action
// 3) addOrganisation should create ADD_ORGANISATION action
// 4) editOrganisation should create EDIT_ORGANISATION action
// 5) deleteOrganisation should create DELETE_ORGANISATION action


export function selectOrganisation(orgName){
  return{
    type:SELECT_ORGANISATION,
    payload: orgName
  }

}

export function deSelectOrganisation(orgName){
  return{
    type:DESELECT_ORGANISATION,
    payload: orgName
  }

}

export function addOrganisation(orgName){
  return{
    type:ADD_ORGANISATION,
    payload: orgName
  }

}


export function editOrganisation(orgName){
  return{
    type:EDIT_ORGANISATION,
    payload: orgName
  }

}


export function deleteOrganisation(orgName){
  return{
    type:DELETE_ORGANISATION,
    payload: orgName
  }

}
