import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { items, itemsHasErrored, itemsIsLoading } from "../screens/home/reducer";

export default combineReducers({
	form: formReducer,
	items,
	itemsHasErrored,
	itemsIsLoading,
});
