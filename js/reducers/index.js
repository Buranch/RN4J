import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { items, itemsHasErrored, itemsIsLoading } from "./dataFetch";

export default combineReducers({
	form: formReducer,
	items,
	itemsHasErrored,
	itemsIsLoading,
});
