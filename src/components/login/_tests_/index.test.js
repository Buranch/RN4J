/**
 * Sample React Native Snapshot Test
 */
"use strict";

import "react-native";
import React from "react";
import LoginForm from "../index";
import { Provider } from "react-redux";
import configureStore from "../../../boot/configureStore";
const store = configureStore();
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
