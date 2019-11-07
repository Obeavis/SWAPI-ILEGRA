import React from "react";
import { MemoryRouter } from 'react-router-dom';
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import Main from "./Main";

configure({ adapter: new Adapter() });

describe("Film Component", () => {

    const component = (
        <MemoryRouter>
            <Main />
        </MemoryRouter>
    );

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it('Rendering', () => {
        const wrapper = mount(component)
        expect(wrapper.find('RootSelect').exists()).toEqual(true)
    });

})