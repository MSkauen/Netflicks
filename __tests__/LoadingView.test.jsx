import TestRenderer from 'react-test-renderer'; // ES6
import {LoadingView} from "../src/client/lib/LoadingView";
import React from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "@jest/globals";
import { act } from "react-dom/test-utils";

describe("loading view", () => {
    it("show loading view", () => {
        const view = TestRenderer.create(<LoadingView/>);
            expect(view.toJSON()).toMatchSnapshot();
    })
    it("show loading view on dom", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        act(() => ReactDOM.render(<LoadingView/>, container))
            expect(container.innerHTML).toMatchSnapshot();
    })
})
