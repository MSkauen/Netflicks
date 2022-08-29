import { requests } from "../src/client/lib/http/requests";
import React from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "@jest/globals";
import { act } from "react-dom/test-utils";
import {SearchResults} from "../src/client/components/SearchResults";

const dummyMovie = {
    show: {
        id: 10,
        name: "Movie name",
        genres: ["Drama", "Action"],
        rating: {
            average: 6.4
        }
    }
}

describe("search results", () => {
    it("show search results on dom", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        await act(async () => {
            ReactDOM.render(<SearchResults title="Result" data={dummyMovie} movieApi={requests}/>, container);
        });

        expect(container.innerHTML).toMatchSnapshot();
        expect(container.querySelector("h2").textContent).toContain("1");
    });
})
