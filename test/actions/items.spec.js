import expect from 'expect'
import * as types from '../../src/constants/ActionTypes'
import * as actions from '../../src/actions'

describe('item actions', () => {
  it('selectItem should create SELECT_ITEM action', () => {
    expect(actions.selectItem(1)).toEqual({
      type: types.SELECT_ITEM,
      id: 1
    })
  })

  it('deselectItem should create DESELECT_ITEM action', () => {
    expect(actions.deselectItem(1)).toEqual({
      type: types.DESELECT_ITEM,
      id: 1
    })
  })

  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.deleteItem(1)).toEqual({
      type: types.DELETE_ITEM,
      id: 1,
    })
  })

  it('Item should create SEARCH_ITEM action', () => {
    expect(actions.searchItem('JavaScript 101')).toEqual({
      type: types.SEARCH_ITEM,
      term: 'JavaScript 101'
      })
  })
})
