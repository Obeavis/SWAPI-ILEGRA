import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
import BB8Loader from "./BB8Loader";

configure({ adapter: new Adapter() });

describe('BB8Loader Component', () => {
    const component = (
        <BB8Loader />
    );

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Rendering', () => {
        const wrapper = mount(component)
        expect(wrapper.find('.artboard').exists()).toEqual(true)
    });
}); 