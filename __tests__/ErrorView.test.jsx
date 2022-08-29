import TestRenderer from 'react-test-renderer'; // ES6
import {LoadingView} from "../src/client/lib/LoadingView";
import React from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "@jest/globals";
import { act } from "react-dom/test-utils";
import {ErrorView} from "../src/client/lib/ErrorView";

describe("error view", () => {
    it("show error view", () => {
        const view = TestRenderer.create(<ErrorView/>);
            expect(view.toJSON()).toMatchSnapshot();
    })
    it("show error view on dom", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<ErrorView/>, container)
        });
        expect(container.innerHTML).toMatchSnapshot();
    })
})
