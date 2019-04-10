// Test away
import React from "react";
import { render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import {Provider} from "react-redux";
import {createStore} from "redux";

import Dashboard from "./Dashboard";
import { initialState, reducer } from "../reducers";

afterEach(cleanup);


describe('Dashboard', () => {
    it("should match the snapshot", () => {
        const tree = renderer.create(<Provider store={createStore(reducer)}><Dashboard /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

