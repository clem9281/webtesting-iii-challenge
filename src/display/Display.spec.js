// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import {Provider} from "react-redux";
import {createStore} from "redux";

import { initialState, reducer } from "../reducers";

import Display from "./Display";

const closedStore = {
    closed: true
}

const openStore = {
    closed: false
}

const lockedStore = {
    locked: true
}

const unlockedStore = {
    locked: false
}

const renderWithRedux = (ui, state) => {
    const store = createStore(reducer, state);
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
      store,
    }
}

afterEach(cleanup);

describe('Display', () => {
    it.skip("should match the snapshot", () => {
        const tree = renderer.create(<Display />).toJSON();
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