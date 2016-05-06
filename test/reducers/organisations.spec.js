import expect from 'expect'
import organisations from '../../reducers/organisations'
import * as types from '../../constants/ActionTypes'

describe('organisations reducer', () => {
  it('should handle inital state', () => {
    expect(
      organisations(undefined, {})
    ).toEqual([
      {
        name: 'JavaScript 101',
        selected: false,
        id: 1
      }
    ])
  })

  it('should handle SELECT_ORGANISATION', () => {
    expect(
      organisations([
        {
          name: 'JavaScript 101',
          selected: false,
          id: 1
        }
      ], {
        // type: types.SELECT_ORGANISATION,
        type: 'SELECT_ORGANISATION',
        id: 1
      })
    ).toEqual([
      {
        name: 'JavaScript 101',
        selected: true,
        id: 1
      }
    ])
  })

  it('should handle DESELECT_ORGANISATION', () => {
    expect(
      organisations([
        {
          name: 'JavaScript 101',
          selected: true,
          id: 1
        }
      ], {
        type: 'DESELECT_ORGANISATION',
        id: 1
      })
    ).toEqual([
      {
        name: 'JavaScript 101',
        selected: false,
        id: 1
      }
    ])
  })
<<<<<<< HEAD

  it('should handle ADD_ORGANISATION', () => {
=======
  
  it('shouild handle ADD_ORGANISATION', () => {
>>>>>>> dbed05e507338d8c61094bf325afe39bdd9ba38d
    expect(
      organisations([],  {
          type: types.ADD_ORGANISATION,
          name: 'JavaScript 101'
        })
    ).toEqual([
      {
        name: 'JavaScript 101',
        selected: false,
        id: 1
      }
    ])

    expect(
      organisations([
        {
          name: 'JavaScript 101',
          selected: false,
          id: 1
        }
      ], {
        type: types.ADD_ORGANISATION,
        name: 'CodeHub Bristol'
      })
    ).toEqual([
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
    ])

    expect(
      organisations([
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
      ], {
        type: types.ADD_ORGANISATION,
        name: 'Beetroot Cafe'
      })
    ).toEqual([
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
    ])
  })

  it('should handle EDIT_ORGANISATION', () => {
    expect(
      organisations([
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
      ], {
        type: types.EDIT_ORGANISATION,
        name: 'Beetroot Cafe',
        id: 2
      })
    ).toEqual([
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
    ])
  })

  it('should handle EDIT_ORGANISATION', () => {
    expect(
      organisations([
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
      ], {
        type: types.EDIT_ORGANISATION,
        name: 'Beetroot Cafe',
        id: 2
      })
    ).toEqual([
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
    ])
  })

  it('should handle DELETE_ORGANISATION', () => {
    expect(
      organisations([
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
      ], {
        type: types.DELETE_ORGANISATION,
        id: 2
      })
    ).toEqual([
      {
        name: 'JavaScript 101',
        selected: false,
        id: 1
      }
    ])
  })
})
