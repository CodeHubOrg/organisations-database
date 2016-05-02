import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('organisation actions', () => {
  it('selectOrganisation should create SELECT_ORGANISATION action', () => {
    expect(actions.selectOrganisation(1)).toEqual({
      type: types.SELECT_ORGANISATION,
      organisationId: 1
    })
  })

  it('deSelectOrganisation should create DESELECT_ORGANISATION action', () => {
    expect(actions.selectOrganisation(1)).toEqual({
      type: types.DESELECT_ORGANISATION,
      organisationId: 1
    })
  })

  it('addOrganisation should create ADD_ORGANISATION action', () => {
    expect(actions.addOrganisation('JavaScript 101')).toEqual({
      type: types.ADD_ORGANISATION,
      name: 'JavaScript 101'
    })
  })

  it('editOrganisation should create EDIT_ORGANISATION action', () => {
    expect(actions.editOrganisation(1, 'CodeHub Bristol')).toEqual({
      type: types.EDIT_ORGANISATION,
      id: 1,
      name: 'CodeHub Bristol'
    })
  })

  it('deleteOrganisation should create DELETE_ORGANISATION action', () => {
    expect(actions.editOrganisation(1)).toEqual({
      type: types.DELETE_ORGANISATION,
      id: 1,
    })
  })

})
