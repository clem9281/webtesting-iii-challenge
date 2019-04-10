// Test away!
import React from "react";
import {render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(cleanup);

describe('Controls', () => {
    it("should match the snapshot", () => {
       const tree = renderer.create(<Controls />).toJSON();
       expect(tree).toMatchSnapshot();
    })
})