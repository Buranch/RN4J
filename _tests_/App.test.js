/**
 * Sample React Native Snapshot Test
 */
"use strict";

import "react-native";
import React from "react";
import Login from "../js/components/login";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
	const tree = renderer.create(<Login />).toJSON();
	expect(tree).toMatchSnapshot();
});
