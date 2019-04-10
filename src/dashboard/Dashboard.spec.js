// Test away
import React from "react";
import {render } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe('Dashboard', () => {
    it("should match the snapshot", () => {
       const tree = renderer.create(<Dashboard />).toJSON();
       expect(tree).toMatchSnapshot();
    })
})

