// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import {Provider} from "react-redux";
import {createStore} from "redux";

import { reducer } from "../reducers";

import Controls from "./Controls";

import {renderWithRedux, openStore, lockedStore} from "../testHelpers";

afterEach(cleanup);

describe('Controls', () => {
    it("should match the snapshot", () => {
        const tree = renderer.create(<Provider store={createStore(reducer)}><Controls /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("should have button to toggle the closed and locked states", () => {
        const { getByText } = renderWithRedux(<Controls />);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    })

    it("should display the lock button as disabled if the gate is open", () => {
        const { getByText } = renderWithRedux(<Controls/>, openStore);
        const lockBtn = getByText(/lock gate/i);
        expect(lockBtn).toBeDisabled();
    })

    it("should display the close button as disabled if the gate is locked", () => {
        const { getByText } = renderWithRedux(<Controls/>, lockedStore);
        const closeBtn = getByText(/close gate/i);
        expect(closeBtn).toBeDisabled();
    })
})