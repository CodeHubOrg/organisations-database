import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('item actions', () => {
  it('selectItem should create SELECT_ITEM action', () => {
    expect(actions.selectItem(1)).toEqual({
      type: types.SELECT_ITEM,
      id: 1
    })
  })

  it('deSelectItem should create DESELECT_ITEM action', () => {
    expect(actions.deSelectItem(1)).toEqual({
      type: types.DESELECT_ITEM,
      id: 1
    })
  })

  it('addItem should create ADD_ITEM action', () => {
    expect(actions.addItem('JavaScript 101')).toEqual({
      type: types.ADD_ITEM,
      name: 'JavaScript 101'
    })
  })

  it('editItem should create EDIT_ITEM action', () => {
    expect(actions.editItem(1, 'CodeHub Bristol')).toEqual({
      type: types.EDIT_ITEM,
      id: 1,
      name: 'CodeHub Bristol'
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
