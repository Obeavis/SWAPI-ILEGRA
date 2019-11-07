import React from "react";
import { MemoryRouter } from 'react-router-dom';
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import Moment from "react-moment"
import Film from "./Film";

configure({ adapter: new Adapter() });

describe("Film Component", () => {

	const film = {
		episodeID: 4,
		releaseDate: "1977-05-25",
		title: "A New Hope"
	};

	const propsImage = require(`../../assets/images/films/episode-4.jpg`);

	const component = (

		<MemoryRouter initialEntries={['/films']}>
			<Film film={film} image={propsImage} />
		</MemoryRouter>
	)

	it("matches the snapshot", () => {
		const tree = renderer.create(component).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("Renders the right image", () => {
		const wrapper = mount(component);
		const image = wrapper.find('img').prop("src");

		expect(image).toEqual('episode-4.jpg');

	});

	it("Have the right title inside", () => {
		const wrapper = mount(component);
		const title = wrapper.find('.thumb-title').text();

		expect(title).toEqual('A New Hope');
	});

	it("Have the right date inside", () => {
		const wrapper = mount(component);
		const releaseDate = wrapper.find('.thumb-date').find('time').text();

		const date = mount(
			<Moment format="LL">
				{new Date(film.releaseDate)}
			</Moment>
		).find('time').text();

		expect(releaseDate).toEqual(date);
	});

	it("Route to the right path after click", () => {
		const wrapper = mount(component);
		const pathnameBeforeClick = wrapper.find('Router').props().history.location.pathname;
		expect(pathnameBeforeClick).toEqual('/films');

		wrapper.find('Col').simulate('click');

		const pathnameAfterClick = wrapper.find('Router').props().history.location.pathname;
		expect(pathnameAfterClick).toEqual('/films/4');
	});

})