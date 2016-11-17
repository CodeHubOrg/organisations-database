import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import ItemListRow from '../../components/ItemListRow'

function setup(selected = false) {
  const actions = {
    onSelectItem: expect.createSpy(),
    onDeselectItem: expect.createSpy()
  }
  const props = {
    id: 1,
    name: 'Javascript 101',
    selected: selected
  }
  const component = shallow(
    <ItemListRow {...props} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    tr: component.find('tr'),
    name: component.find('.name'),
    id: component.find('.id')
  }
}

describe('Item List Row component', () => {
  it('should display item name', () => {
    const { name } = setup()
    expect(name.text()).toMatch(/^Javascript 101/)
  })
  it('should display item id', () => {
    const { id } = setup()
    expect(id.text()).toMatch(/^1/)
  })
  it('row click should call onSelectItem', () => {
    const { tr, actions } = setup()
    tr.at(0).simulate('click')
    expect(actions.onSelectItem).toHaveBeenCalled()
  })
  it('row click should call onDeselectItem', () => {
    const { tr, actions } = setup(true)
    tr.at(0).simulate('click')
    expect(actions.onDeselectItem).toHaveBeenCalled()
  })
})
