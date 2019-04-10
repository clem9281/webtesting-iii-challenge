// Test away!
import React from "react";
import {render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

import Display from "./Display";

afterEach(cleanup);

describe('Display', () => {
    it("should match the snapshot", () => {
       const tree = renderer.create(<Display />).toJSON();
       expect(tree).toMatchSnapshot();
    })
})