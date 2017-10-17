import expect from 'expect'
import items from '../../src/reducers/items'
import deepFreeze from 'deep-freeze'
import * as types from '../../src/constants/ActionTypes'

describe('items reducer', () => {
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
      expect(items(stateBefore, action)).toEqual(stateAfter)
  })

  // first one is working!
  it('should handle SELECT_ITEM', () => {
      var stateBefore = [
          {
            name: 'JavaScript 101',
            selected: false,
            id: 1
          }
      ]
      var action = {
          type: types.SELECT_ITEM,
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
      expect(items(stateBefore, action)).toEqual(stateAfter)

      // var stateBefore = [
      //     {
      //       name: 'JavaScript 101',
      //       selected: false,
      //       id: 1
      //     },
      //     {
      //       name: 'CodeHub Bristol',
      //       selected: false,
      //       id: 2
      //     }
      // ]
      // var action = {
      //     type: types.SELECT_ITEM,
      //     id: 2
      // }
      // var stateAfter = [
      //     {
      //       name: 'JavaScript 101',
      //       selected: false,
      //       id: 1
      //     },
      //     {
      //       name: 'CodeHub Bristol',
      //       selected: true,
      //       id: 2
      //     }
      // ]
      // deepFreeze(stateBefore)
      // deepFreeze(action)
      // expect(items(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle DESELECT_ITEM', () => {
      var stateBefore = [
          {
            name: 'JavaScript 101',
            selected: true,
            id: 1
          }
      ]
      var action = {
          type: types.DESELECT_ITEM,
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
      expect(items(stateBefore, action)).toEqual(stateAfter)

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
          type: types.DESELECT_ITEM,
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
      expect(items(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle DELETE_ITEM', () => {
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
          type: types.DELETE_ITEM,
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
      expect(items(stateBefore, action)).toEqual(stateAfter)
  })
})
