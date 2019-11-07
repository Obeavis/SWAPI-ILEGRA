import React from "react";
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import FilmPage from "./FilmPage";

configure({ adapter: new Adapter() });



describe("FilmPage", () => {
    const mockStore = configureStore();
    let store;

    it("Matches the snapshot", () => {
        store = mockStore({
            film: {
                "film": {
                    "episodeID": 1,
                    "title": "The Phantom Menace",
                    "director": "George Lucas",
                    "releaseDate": "1999-05-19",
                    "openingCrawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict...."
                },
                "error": false,
                "filmNotFound": false
            }
        });

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <FilmPage />
                </MemoryRouter>
            </Provider>
        );

        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("Renders the <FilmPage />", () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/films/1']}>
                    <FilmPage />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('FilmPage').exists()).toEqual(true)
    });

    it("Renders <BB8Loader />", () => {
        store = mockStore({
            film: {
                "film": {},
                "error": false,
                "filmNotFound": false
            }
        });

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/films/1']}>
                    <FilmPage />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('BB8Loader').exists()).toEqual(true)
    });

    it("Renders <SomethingWentWrong />", () => {
        store = mockStore({
            film: {}
        });

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <FilmPage initialEntries={['/films/1']} />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('SomethingWentWrong').exists()).toEqual(true)
    });

})