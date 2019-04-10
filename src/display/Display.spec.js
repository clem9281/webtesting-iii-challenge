// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

import Display from "./Display";

afterEach(cleanup);

describe('Display', () => {
    it("should match the snapshot", () => {
        const tree = renderer.create(<Display />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("should display 'locked' if the closed prop is true", () => {
        const { getByText } = render(<Display closed={true} />);
        getByText(/closed/i);
    })

    it("should display 'locked' if the locked prop is true", () => {
        const { getByText } = render(<Display locked={true} />);
        getByText(/locked/i);
    })

    it("should display 'unlocked' if the locked prop is false", () => {
        const { getByText } = render(<Display locked={false} />);
        getByText(/unlocked/i);
    })

    it("should use the red-led class if the closed prop is true", () => {
        const { getByText } = render(<Display closed={true} />);
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass('red-led');
    })

    it("should use the red-led class if the locked prop is true", () => {
        const { getByText } = render(<Display locked={true} />);
        const locked = getByText(/locked/i);
        expect(locked).toHaveClass('red-led');
    })

    it("should use the green-led class if the closed prop is false", () => {
        const { getByText } = render(<Display closed={false} />);
        const open = getByText(/open/i);
        expect(open).toHaveClass('green-led');
    })

    it("should use the green-led class if the locked prop is false", () => {
        const { getByText } = render(<Display locked={false} />);
        const unlocked = getByText(/unlocked/i);
        expect(unlocked).toHaveClass('green-led');
    })
})