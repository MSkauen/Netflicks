import React from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "@jest/globals";
import { act } from "react-dom/test-utils";
import GetRandomMovieBanner from "../src/client/components/MovieBanner";
import {MemoryRouter} from "react-router";

async function render(component) {
    const container = document.createElement("div");
    document.body.appendChild(container);
    await act(async () => {
        ReactDOM.render(<MemoryRouter>{component}</MemoryRouter>, container);
    });
    return container;
}

describe("get movie banner", () => {
    it("show random movie banner", async () => {
        const movieApi = {
            async getRandomMovie() {
                return (
                    {
                        id: 10,
                        name: "Forest movie",
                        genres: ["Drama", "Action"],
                        rating: {
                            average: 6.4
                        },
                        summary: "Great movie about forests."
                    }
                );
            },
            getMovieBackground: async () => [
                {
                    id: 1,
                    resolutions: {
                        original: {
                            url: "https://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg"
                        }
                    },
                    type: "background"
                },
            ]
        };

        const container = await render(<GetRandomMovieBanner movieApi={ movieApi } />);
        expect(container.innerHTML).toMatchSnapshot();
        expect(container.querySelector("img").src).toEqual(
            "https://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg"
        );
    });
})