import React from 'react'
import { SET_KEYWORD } from '../constants/ActionTypes.js'

const initialState = {
  keyword: 'javascript'
}

function searchKeyword (state = initialState, action) {
  if (action.type === SET_KEYWORD) {
    return Object.assign({}, { keyword: action.keyword })
  }
  return state
}

export default searchKeyword
