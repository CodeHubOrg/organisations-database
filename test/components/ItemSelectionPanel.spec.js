// import expect from 'expect'
// import React from 'react'
// import { shallow } from 'enzyme'
// import ItemSelectionPanel from '../../src/components/ItemSelectionPanel'

// function setup(selected = null){
//     const props = {
//         selectedItem: selected
//     }
//     const component = shallow(
//         <ItemSelectionPanel {...props} />     
//     )
//     const heading =  component.find('.panel-heading')
//     const body = component.find('.panel-body')
//     return {
//         component: component,
//         heading: heading,
//         body: body,
//         h3: heading.find('h3'),
// 		h4: heading.find('h4'),
// 		img: body.find('img'),
// 		description: body.find('p'),
// 		link: body.find('a')
//     }
// }

// describe('Item Selection Panel', () => {
//     it('should display a div with class "panel"', () => {
//         const { component } = setup()
//         expect(component.is('div')).toBe(true)
//         expect(component.hasClass('panel')).toBe(true)
//     });
//     it('should contain a div with class "panel-heading"', () => {
//         const { heading } = setup()
//         expect(heading.hasClass('panel-heading')).toBe(true)
//     });
//     it('should contain a h3 element within the panel-heading, with the class "panel-title"', () => {
//         const { h3 } = setup()
//         expect(h3.hasClass('panel-title')).toBe(true)
//     });
//     it('should contain a h3 element within the panel-heading, with text "Selected Item:"', () => {
//         const { h3 } = setup()
//         expect(h3.text()).toMatch(/^Selected Item/)
//     });
//     it('should have an h4 element saying "None selected" when props selectedItem not set', () => {
//         let { h4 } = setup()
//         expect(h4.text()).toMatch(/^None selected/)
//     });
//     it('should have an h4 element saying name of org "JavaScript 101" when JS101 is selected', () => {
//         const selectedOrg = {id: 1, name: "JavaScript 101", description: "Group for learning JavaScript"}
//         const { h4 } = setup(selectedOrg)
//         expect(h4.text()).toMatch(/^JavaScript 101/)
//     });
// 	it('should contain an img element within the panel-body, with the class "resource-image"', () => {
//         const { img } = setup()
//         expect(img.hasClass('resource-image')).toBe(true)
//     });
// 	it('should contain an img element within the panel-body where the alt is an empty string when selectedItem not set', () => {
		
// 		const { img } = setup()
// 		expect(img.equals(<img className="resource-image" alt='' src='' />)).toBe(true)
		
//     });
// 	it('should contain an img element within the panel-body, with the alt "resource_logo" and the src "../constants/javascript101_logo.jpeg" when JS101 is selected', () => {
// 		const selectedOrg = {id: 1, name: "JavaScript 101", imagepath: "../constants/javascript101_logo.jpeg"}
// 		const { img } = setup(selectedOrg)
// 		expect(img.equals(<img className="resource-image" alt='resource_logo' src='../constants/javascript101_logo.jpeg' />)).toBe(true)
//     });
// 	it('should contain a p element within the panel-body, with the class "resource-descrip"', () => {
//         const { description } = setup()
//         expect(description.hasClass('resource-descrip')).toBe(true)
//     });
// 	it('should contain a p element within the panel-body, with text "Group for learning JavaScript" when JS101 is selected', () => {
// 		const selectedOrg = {id: 1, name: "JavaScript 101", description: "Group for learning JavaScript"}
//         const { description } = setup(selectedOrg)
//         expect(description.text()).toMatch(/^Group for learning JavaScript/)
//     });
// 	it('should contain an a element within the panel body where the text is an empty string when props selectedItem not set', () => {
//         let { link } = setup()
//         expect(link.text()).toMatch(/^/)
//     });
// 	it('should contain an a element within the panel-body, with text "Link to more info" when an item is selected', () => {
//         const selectedOrg = {id: 1, name: "JavaScript 101", description: "Group for learning JavaScript"}
// 		const { link } = setup(selectedOrg)
//         expect(link.text()).toMatch(/^Link to more info/)
//     });
// })