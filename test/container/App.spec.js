import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import { App } from '../../containers/App'
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

describe('<App />', () => {
  it('should display a title', () => {
    const { component } = setup()
    expect(component.contains(<h1>Organisations Database</h1>)).toBe(true)
  });
  it('contains an <OrganisationList /> component', function () {
    const { component } = setup()
    console.log(component.debug())
    expect(component.find(OrganisationList).length).toBe(1);
  });

  // contains the default organisations

// describe('App container', () => {
//   it('should display a title', () => {
//     const { component } = setup()
//     expect(component.contains(<h1>Organisations Database</h1>)).toBe(true)
//   });
//   it('should display a list of organisations', () => {
//     const { component, props } = setup()
//     console.log('PROPS', component.children().debug())
//     expect(component.contains(<OrganisationList />)).toBe(true)
//     // expect(component.find('ul').children().length).toBe(props.length)
//
//     // console.log(component.find('ul').children().length)
//     // expect([1,2,3]).to.have.length(3)
//     // expect(component.find('ul').children()).to.have.length(props.length);
//     // expect(component.contains(<OrganisationList />)).toBe(true)
//   });
})
