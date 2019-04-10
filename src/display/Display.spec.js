// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import {Provider} from "react-redux";
import {createStore} from "redux";

import { reducer } from "../reducers";

import {closedStore, openStore, lockedStore, unlockedStore, renderWithRedux} from "../testHelpers";

import Display from "./Display";

afterEach(cleanup);

describe('Display', () => {
    it("should match the snapshot", () => {
        const tree = renderer.create(<Provider store={createStore(reducer)}><Display /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("should display 'locked' if the closed prop is true", () => {
        const { getByText} = renderWithRedux(<Display/>, closedStore);
        getByText(/closed/i);
    })

    it("should display 'locked' if the locked prop is true", () => {
        const { getByText } = renderWithRedux(<Display />, lockedStore);
        getByText(/locked/i);
    })

    it("should display 'unlocked' if the locked prop is false", () => {
        const { getByText } = renderWithRedux(<Display />, unlockedStore);
        getByText(/unlocked/i);
    })

    it("should use the red-led class if the closed prop is true", () => {
        const { getByText } = renderWithRedux(<Display />, closedStore);
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass('red-led');
    })

    it("should use the red-led class if the locked prop is true", () => {
        const { getByText } = renderWithRedux(<Display />, lockedStore);
        const locked = getByText(/locked/i);
        expect(locked).toHaveClass('red-led');
    })

    it("should use the green-led class if the closed prop is false", () => {
        const { getByText } = renderWithRedux(<Display />, openStore);
        const open = getByText(/open/i);
        expect(open).toHaveClass('green-led');
    })

    it("should use the green-led class if the locked prop is false", () => {
        const { getByText } = renderWithRedux(<Display />, unlockedStore);
        const unlocked = getByText(/unlocked/i);
        expect(unlocked).toHaveClass('green-led');
    })
})