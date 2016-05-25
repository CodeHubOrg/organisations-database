<<<<<<< HEAD
=======

/** Uncomment to run the tests

import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import OrganisationSelectionPanel from '../../components/OrganisationSelectionPanel'

function setup(selected = null){
    const props = {
        selectedOrganisation: selected
    }
    const component = shallow(
        <OrganisationSelectionPanel {...props} />     
    )
    const heading =  component.find('.panel-heading')
    const body = component.find('.panel-body')
    return {
        component: component,
        heading: heading,
        body: body,
        h3: heading.find('h3')
    }
}

describe('Organisation Selection Panel', () => {
    it('should display a div with class "panel"', () => {
        const { component } = setup()
        expect(component.is('div')).toBe(true)
        expect(component.hasClass('panel')).toBe(true)
    });
    it('should contain a div with class "panel-heading"', () => {
        const { heading } = setup()
        expect(heading.hasClass('panel-heading')).toBe(true)
    });
    it('should contain a h3 element within the panel-heading, with the class "panel-title"', () => {
        const { h3 } = setup()
        expect(h3.hasClass('panel-title')).toBe(true)
    });
    it('should contain a h3 element within the panel-heading, with text "Selected Organisation"', () => {
        const { h3 } = setup()
        expect(h3.text()).toMatch(/^Selected Organisation/)
    });
    it('should have panel-body saying "None selected" when props selectedOrganisation not set', () => {
        let { body } = setup()
        expect(body.text()).toMatch(/^None selected/)
    });
    it('should have panel-body saying name of org "JavaScript 101" when JS101 is selected', () => {
        const selectedOrg = {id: 1, name: "JavaScript 101"}
        const { body } = setup(selectedOrg)
        expect(body.text()).toMatch(/^JavaScript 101/)
    });
})


**/
>>>>>>> dbe4515ecd95859f50abc7473f623d078f7a4b1c
