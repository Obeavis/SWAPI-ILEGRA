import React from "react";
import { MemoryRouter  } from 'react-router-dom';
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import Header from "./Header";

configure({ adapter: new Adapter() });

describe("Header Component", () => {
    
    const component = (

        <MemoryRouter initialEntries={['/films']}>
                <Header />
        </MemoryRouter>
    )

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("Renders the image", () => {
        const wrapper = mount(component);
        const image = wrapper.find('img').prop("src");

        expect(image).toEqual('star-wars-logo.png');

    });

    it("Route to Main when click the image", () => {
        const wrapper = mount(component);
        const pathnameBeforeClick =  wrapper.find('Router').props().history.location.pathname;
        expect(pathnameBeforeClick).toEqual('/films');

        wrapper.find('img').simulate('click');

        const pathnameAfterClick =  wrapper.find('Router').props().history.location.pathname;
        expect(pathnameAfterClick).toEqual('/main');
    });

})