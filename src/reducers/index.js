import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../Screens/Home/reducer";

export default combineReducers({
	form: formReducer,
	screens: {
		home: homeReducer,
	},
	homeReducer,
});
