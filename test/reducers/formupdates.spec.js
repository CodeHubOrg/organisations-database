import expect from 'expect'
import formupdates from '../../reducers/formupdates'
import deepFreeze from 'deep-freeze'
import { UPDATE_FORM } from '../../constants/ActionTypes'

describe('formupdates reducer', () => {
    it('should handle initial state', () => {
        let stateBefore = undefined
        let action = {}
        let stateAfter = [
            {
                id: 1,
                value: ""
            }
        ]
        expect(formupdates(stateBefore, action)).toEqual(stateAfter)
    })

    it('should handle UPDATE_FORM', () => {
        let stateBefore =  [
            {
                id: 1,
                value: ""
            }
        ]
        let action = {
            type: UPDATE_FORM,
            id: 1,
            value: "JavaScript Ninja"
        }
        let stateAfter = [
            {
            id: 1,
            value: "JavaScript Ninja"
            }
        ]
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(formupdates(stateBefore, action)).toEqual(stateAfter)
    })
})