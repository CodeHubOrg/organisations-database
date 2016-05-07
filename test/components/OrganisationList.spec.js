import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import OrganisationList from '../../components/OrganisationList'

function setup() {
  const props = [
    {
      id: 1,
      name: 'Javascript 101',
      selected: false
    },
    {
      id: 2,
      name: 'CodeHub Bristol',
      selected: false
    }
  ]
  const component = shallow(
    <OrganisationList organisations={props} />
  )

  return {
    component: component,
    thead: component.find('thead'),
    tbody: component.find('tbody')
  }
}

describe('Organisation List component', () => {
  it('should display a bootstrap table', () => {
    const { component } = setup()
    expect(component.is('table')).toBe(true)
    expect(component.hasClass('table table-striped table-bordered table-hover')).toBe(true)
  });
  it('should display table headers', () => {
    const { thead } = setup()
    expect(thead.find('th').at(0).text()).toMatch(/^Name/)
    expect(thead.find('th').at(1).text()).toMatch(/^Id/)
  });
  /**
   * @todo
   */
  // it('should display organisation rows', () => {
  // });
})
