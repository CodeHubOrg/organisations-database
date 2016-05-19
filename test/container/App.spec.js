import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../../containers/App'
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
  const component = mount(
    <App organisations={props} />
  )

  return {
    component: component,
    props: props
  }
}

describe('App container', () => {
  it('should display a title', () => {
    const { component } = setup()
    expect(component.contains(<h1>Organisations Database</h1>)).toBe(true)
  });
  it('contains an <OrganisationList /> component', function () {
    const { component } = setup()
    expect(component.find(OrganisationList).length).toBe(1);
  });
})
