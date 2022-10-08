import React from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "@jest/globals";
import { act } from "react-dom/test-utils";
import {SearchResults} from "../src/client/components/SearchResults";
import {MemoryRouter} from "react-router";

async function render(component) {
    const container = document.createElement("div");
    document.body.appendChild(container);
    await act(async () => {
        ReactDOM.render(<MemoryRouter>{component}</MemoryRouter>, container);
    });
    return container;
}

describe("search results", () => {
    it("show search results on dom", async () => {
        const movieApi = {
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
        const container = await render(<SearchResults movieApi={ movieApi } data={[]} query={"Dome"} />);

        expect(container.innerHTML).toMatchSnapshot();
        expect(container.querySelector("h2").textContent).toContain("Dome");
    });
})
