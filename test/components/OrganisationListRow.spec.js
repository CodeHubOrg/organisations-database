import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import OrganisationListRow from '../../components/OrganisationListRow'

function setup(selected = false) {
  const actions = {
    onSelectOrganisation: expect.createSpy(),
    onDeselectOrganisation: expect.createSpy()
  }
  const props = {
    id: 1,
    name: 'Javascript 101',
    selected: selected
  }
  const component = shallow(
    <OrganisationListRow {...props} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    tr: component.find('tr'),
    name: component.find('.name'),
    id: component.find('.id')
  }
}

describe('Organisation List Row component', () => {
  it('should display organisation name', () => {
    const { name } = setup()
    expect(name.text()).toMatch(/^Javascript 101/)
  })
  it('should display organisation id', () => {
    const { id } = setup()
    expect(id.text()).toMatch(/^1/)
  })
  it('row click should call onSelectOrganisation', () => {
    const { tr, actions } = setup()
    tr.at(0).simulate('click')
    expect(actions.onSelectOrganisation).toHaveBeenCalled()
  })
  it('row click should call onDeselectOrganisation', () => {
    const { tr, actions } = setup(true)
    tr.at(0).simulate('click')
    expect(actions.onDeselectOrganisation).toHaveBeenCalled()
  })
})
