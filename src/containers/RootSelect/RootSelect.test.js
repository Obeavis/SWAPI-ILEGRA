import React from "react";
import { MemoryRouter } from 'react-router-dom';
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import RootSelect from "./RootSelect";

configure({ adapter: new Adapter() });

describe("RootSelect container", () => {

    const component = (

        <MemoryRouter initialEntries={['/main']}>
            <RootSelect />
        </MemoryRouter>
    )

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it("Renders the right films image", () => {
        const wrapper = mount(component);
        const image = wrapper.find('img').first().prop("src");

        expect(image).toEqual('all-films.jpg');

    });

    it("Have the right title inside", () => {
        const wrapper = mount(component);
        const title = wrapper.find('Col').first().find('.thumb-title').text();

        expect(title).toEqual('Films');
    });

    it("Route to the right path after click", () => {
        const wrapper = mount(component);
        const pathnameBeforeClick = wrapper.find('Router').props().history.location.pathname;
        expect(pathnameBeforeClick).toEqual('/main');

        wrapper.find('Col').first().simulate('click');

        const pathnameAfterClick = wrapper.find('Router').props().history.location.pathname;
        expect(pathnameAfterClick).toEqual('/films');
    });

})