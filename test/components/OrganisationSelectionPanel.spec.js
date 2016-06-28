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
        h3: heading.find('h3'),
		img: body.find('img'),
		description: body.find('p'),
		link: body.find('a')
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
	it('should contain an img element within the panel-body, with the class "resource-image"', () => {
        const { img } = setup()
        expect(img.hasClass('resource-image')).toBe(true)
    });
	it('should contain an img element within the panel-body, with the alt "resource-image"', () => {
		const { body } = setup()
		var img = body.find('[alt="resource-image"]')
		var result = false
		if (img) { result = true }
		expect(result).toBe(true)
    });
	it('should contain a p element within the panel-body, with the class "resource-descrip"', () => {
        const { description } = setup()
        expect(description.hasClass('resource-descrip')).toBe(true)
    });
	it('should contain a p element within the panel-body, with text "Description of resource"', () => {
        const { description } = setup()
        expect(description.text()).toMatch(/^Description of resource/)
    });
	it('should contain an a element within the panel-body, with text "Resource link"', () => {
        const { link } = setup()
        expect(link.text()).toMatch(/^Resource link/)
    });
})