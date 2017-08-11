/**
 * Sample React Native Snapshot Test
 */
"use strict";

import "react-native";
import React from "react";
import SignUp from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
	const tree = renderer.create(<SignUp />).toJSON();
	expect(tree).toMatchSnapshot();
});
