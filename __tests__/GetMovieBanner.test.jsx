import React from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "@jest/globals";
import { act } from "react-dom/test-utils";
import GetRandomMovieBanner from "../src/client/components/MovieBanner";
import MovieBanner from "../src/client/components/MovieBanner";

const dummyMovie = {
        id: 10,
        name: "Movie name",
        genres: ["Drama", "Action"],
        rating: {
            average: 6.4
        },
        summary: "Great movie about forests."
}

const movieApi = {
    getRandomMovie: async () => [
        {   id: 10,
            name: "Forest movie",
            genres: ["Drama", "Action"],
            rating: {
                average: 6.4
            },
            summary: "Great movie about forests."
        }
    ]
};

describe("get movie banner", () => {
    it("show random movie banner", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        await act(async () => {
            ReactDOM.render(<GetRandomMovieBanner movieApi={movieApi}/>, container);
        });

        expect(container.innerHTML).toMatchSnapshot();
    });
    it("show selected movie banner", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        await act(async () => {
            ReactDOM.render(<MovieBanner data={dummyMovie} movieApi={movieApi}/>, container);
        });

        expect(container.innerHTML).toMatchSnapshot();
    });
})
