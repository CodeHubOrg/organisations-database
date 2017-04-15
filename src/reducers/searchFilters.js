import React, { Component } from 'react'

import { SELECT_FILTER } from '../constants/ActionTypes.js'
import * as CATEGORIES from '../constants/FilterCategories'

const initialState = {
  [ CATEGORIES.RESOURCE_TYPE ]: 'All',
  [ CATEGORIES.DIFFICULTY ]: 5
}

function searchFilters (state = initialState, action) {
  if (action.type === SELECT_FILTER) {
    return Object.assign({}, state, { [action.category]: action.filter })
  }
  return state
}

export default searchFilters
