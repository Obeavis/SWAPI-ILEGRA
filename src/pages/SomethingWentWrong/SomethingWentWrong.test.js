import React from "react";
import { MemoryRouter } from 'react-router-dom';
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import SomethingWentWrong from "./SomethingWentWrong";

configure({ adapter: new Adapter() });

describe("Film Component", () => {

    const component = (
        <MemoryRouter>
                <SomethingWentWrong />
        </MemoryRouter>
    )

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it("Renders the right image", () => {
        const wrapper = mount(component);
        const image = wrapper.find('img').prop("src");

        expect(image).toEqual('something-went-wrong.png');

    });

    it("Have the right text inside", () => {
        const wrapper = mount(component);
        const error = wrapper.find('h2').text();
        const text = wrapper.find('p').text();

        expect(error).toEqual('Ooops');
        expect(text).toEqual("something went wrong");
    });

})