// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(cleanup);

describe.skip('Controls', () => {
    it("should match the snapshot", () => {
        const tree = renderer.create(<Controls />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("should have button to toggle the closed and locked states", () => {
        const { getByText } = render(<Controls />);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    })

    it("should display the lock button as disabled if the gate is open", () => {
        const { getByText } = render(<Controls closed={false} />);
        const lockBtn = getByText(/lock gate/i);
        expect(lockBtn).toBeDisabled();
    })

    it("should display the close button as disabled if the gate is locked", () => {
        const { getByText } = render(<Controls locked={true} />);
        const closeBtn = getByText(/close gate/i);
        expect(closeBtn).toBeDisabled();
    })
})