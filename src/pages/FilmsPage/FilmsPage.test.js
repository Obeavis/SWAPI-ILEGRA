import React from "react";
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import FilmsPage from "./FilmsPage";

configure({ adapter: new Adapter() });



describe("FilmsPage", () => {
    const mockStore = configureStore();
    let store;

    it("Matches the snapshot", () => {
        store = mockStore({
            allFilms: {
                films: [
                    { "episodeID": 4, "title": "A New Hope", "releaseDate": "1977 - 05 - 25" },
                    { "episodeID": 5, "title": "The Empire Strikes Back", "releaseDate": "1980 - 05 - 17" },
                    { "episodeID": 6, "title": "Return of the Jedi", "releaseDate": "1983 - 05 - 25" },
                    { "episodeID": 1, "title": "The Phantom Menace", "releaseDate": "1999 - 05 - 19" },
                    { "episodeID": 2, "title": "Attack of the Clones", "releaseDate": "2002 - 05 - 16" },
                    { "episodeID": 3, "title": "Revenge of the Sith", "releaseDate": "2005 - 05 - 19" },
                    { "episodeID": 7, "title": "The Force Awakens", "releaseDate": "2015 - 12 - 11" },
                ],
                error: false
            }
        });

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <FilmsPage />
                </MemoryRouter>
            </Provider>
        );

        const tree = renderer.create(wrapper).toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it("Renders the <FilmsPage /> with 7 films", () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <FilmsPage />
                </MemoryRouter>
            </Provider>
        );
        const quantity = wrapper.find('Film');

        expect(quantity).toHaveLength(7);
    });

    it("Renders <BB8Loader />", () => {
        store = mockStore({
            allFilms: {
                films: {},
                error: false
            }
        });

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <FilmsPage />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('BB8Loader').exists()).toEqual(true)
    });

    it("Renders <SomethingWentWrong />", () => {
        store = mockStore({
            allFilms: {
                films: {},
                error: true
            }
        });

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <FilmsPage />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('SomethingWentWrong').exists()).toEqual(true)
    });

})