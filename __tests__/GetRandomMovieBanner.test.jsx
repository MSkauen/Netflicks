import { requests } from "../src/client/lib/http/requests";
import React from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "@jest/globals";
import { act } from "react-dom/test-utils";
import GetRandomMovieBanner from "../src/client/components/MovieBanner";
import {fetchJson} from "../src/client/lib/http/http";

const movieApi = {
    getRandomMovie: async () => await fetchJson("http://api.tvmaze.com/shows").then(
        res => res[Math.floor(Math.random() * res.length - 1)]
    ),
};

describe("get random movie banner", () => {
    it("show movie banner", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        await act(async () => {
            ReactDOM.render(<GetRandomMovieBanner movieApi={movieApi}/>, container);
        });

        expect(container.innerHTML).toMatchSnapshot();
    });
})
