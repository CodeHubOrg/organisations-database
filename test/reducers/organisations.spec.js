import expect from 'expect'
import organisations from '../../reducers/organisations'
import deepFreeze from 'deep-freeze'
import * as types from '../../constants/ActionTypes'

describe('organisations reducer', () => {
  it('should handle inital state', () => {
      var stateBefore = undefined
      var action = {}
      var stateAfter = [
        {
          name: 'JavaScript 101',
          selected: false,
          id: 1,
		  description: "Group for learning JavaScript",
		  url: "http://www.meetup.com/CodeHub-Bristol/",
		  imagepath: "../constants/javascript101_logo.jpeg",
        }
      ]
      expect(organisations(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle SELECT_ORGANISATION', () => {
      var stateBefore = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          }
      ]
      var action = {
          type: types.SELECT_ORGANISATION,
          id: 1
      }
      var stateAfter = [
        {
          name: 'JavaScript 101',
          selected: true,
          id: 1
        }
      ]
      deepFreeze(stateBefore)
      deepFreeze(action)
      expect(organisations(stateBefore, action)).toEqual(stateAfter)

      var stateBefore = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          },
          {
            name: 'CodeHub Bristol',
            selected: false,
            id: 2
          }
      ]
      var action = {
          type: types.SELECT_ORGANISATION,
          id: 2
      }
      var stateAfter = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          },
          {
            name: 'CodeHub Bristol',
            selected: true,
            id: 2
          }
      ]
      deepFreeze(stateBefore)
      deepFreeze(action)
      expect(organisations(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle DESELECT_ORGANISATION', () => {
      var stateBefore = [
          {
            name: 'JavaScript 101',
            selected: true,
            id: 1
          }
      ]
      var action = {
          type: types.DESELECT_ORGANISATION,
          id: 1
      }
      var stateAfter = [
        {
          name: 'JavaScript 101',
          selected: false,
          id: 1
        }
      ]
      deepFreeze(stateBefore)
      deepFreeze(action)
      expect(organisations(stateBefore, action)).toEqual(stateAfter)

      var stateBefore = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          },
          {
            name: 'CodeHub Bristol',
            selected: true,
            id: 2
          }
      ]
      var action = {
          type: types.DESELECT_ORGANISATION,
          id: 2
      }
      var stateAfter = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          },
          {
            name: 'CodeHub Bristol',
            selected: false,
            id: 2
          }
      ]
      deepFreeze(stateBefore)
      deepFreeze(action)
      expect(organisations(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle ADD_ORGANISATION', () => {
    var stateBefore = []
    var action = {
        type: types.ADD_ORGANISATION,
        name: 'JavaScript 101'
    }
    var stateAfter = [
      {
        name: 'JavaScript 101',
        selected: false,
        id: 1
      }
    ]
    deepFreeze(stateBefore)
    deepFreeze(action)
    expect(organisations(stateBefore, action)).toEqual(stateAfter)

    var stateBefore = [
        {
          name: 'JavaScript 101',
          selected: false,
          id: 1
        }
    ]
    var action = {
        type: types.ADD_ORGANISATION,
        name: 'CodeHub Bristol'
    }
    var stateAfter = [
        {
          name: 'JavaScript 101',
          selected: false,
          id: 1
        },
        {
          name: 'CodeHub Bristol',
          selected: false,
          id: 2
        }
    ]
    deepFreeze(stateBefore)
    deepFreeze(action)
    expect(organisations(stateBefore, action)).toEqual(stateAfter)

    var stateBefore = [
        {
          name: 'JavaScript 101',
          selected: false,
          id: 1
        },
        {
          name: 'CodeHub Bristol',
          selected: false,
          id: 2
        }
    ]
    var action = {
        type: types.ADD_ORGANISATION,
        name: 'Beetroot Cafe'
    }
    var stateAfter = [
        {
          name: 'JavaScript 101',
          selected: false,
          id: 1
        },
        {
          name: 'CodeHub Bristol',
          selected: false,
          id: 2
        },
        {
          name: 'Beetroot Cafe',
          selected: false,
          id: 3
        }
    ]
    deepFreeze(stateBefore)
    deepFreeze(action)
    expect(organisations(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle EDIT_ORGANISATION', () => {
      var stateBefore = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          },
          {
            name: 'CodeHub Bristol',
            selected: false,
            id: 2
          }
      ]
      var action = {
          type: types.EDIT_ORGANISATION,
          name: 'Beetroot Cafe',
          id: 2
      }
      var stateAfter = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          },
          {
            name: 'Beetroot Cafe',
            selected: false,
            id: 2
          }
      ]
      deepFreeze(stateBefore)
      deepFreeze(action)
      expect(organisations(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle DELETE_ORGANISATION', () => {
      var stateBefore = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          },
          {
            name: 'CodeHub Bristol',
            selected: false,
            id: 2
          }
      ]
      var action = {
          type: types.DELETE_ORGANISATION,
          id: 2
      }
      var stateAfter = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          },
      ]
      deepFreeze(stateBefore)
      deepFreeze(action)
      expect(organisations(stateBefore, action)).toEqual(stateAfter)
  })
})
