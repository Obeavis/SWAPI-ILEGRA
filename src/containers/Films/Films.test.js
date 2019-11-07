import React from "react";
import { MemoryRouter } from 'react-router-dom';
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import Films from "./Films";

configure({ adapter: new Adapter() });

describe("Films container", () => {
	const films = [
		{ episodeID: 4, title: "A New Hope", releaseDate: "1977-05-25" },
		{ episodeID: 5, title: "The Empire Strikes Back", releaseDate: "1980-05-17" },
		{ episodeID: 6, title: "Return of the Jedi", releaseDate: "1983-05-25" },
		{ episodeID: 1, title: "The Phantom Menace", releaseDate: "1999-05-19" },
		{ episodeID: 2, title: "Attack of the Clones", releaseDate: "2002-05-16" },
		{ episodeID: 3, title: "Revenge of the Sith", releaseDate: "2005-05-19" },
		{ episodeID: 7, title: "The Force Awakens", releaseDate: "2015-12-11" }
	];

	const component = (
		<MemoryRouter>
			<Films films={films} />
		</MemoryRouter>
	);

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

	it("Renders all the 7 films", () => {
		const wrapper = mount(component);
		const quantity = wrapper.find('Film');

		expect(quantity).toHaveLength(7);
	});
});
