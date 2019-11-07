import React from "react";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import StarWarsCrawlText from "./StarWarsCrawlText";
import Moment from "react-moment";

configure({ adapter: new Adapter() });

describe("StarWarsCrawlText Component", () => {

    const film = {
        episodeID: 4,
        releaseDate: "1977-05-25",
        title: "A New Hope",
        director: "George Lucas",
        openingCrawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
    };

    const component = (
        <StarWarsCrawlText film={film} />
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

    it("Have the right title inside", () => {
        const wrapper = mount(component);
        const title = wrapper.find('.content-header').text();

        expect(title).toEqual('EPISODE 4 A New Hope');
    });

    it("Have the right text inside", () => {
        const wrapper = mount(component);
        const text = wrapper.find('.content-body').text();

        const date = mount(
            <Moment format="LL">
                {new Date(film.releaseDate)}
            </Moment>
        ).find('time').text();

        expect(JSON.stringify(text)).toEqual(JSON.stringify(`${film.openingCrawl}Direct by: ${film.director}Release Date: ${date}`));
    });

})