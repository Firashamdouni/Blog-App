import { combineReducers } from "redux";

const initialState = (state = [], action) => {
	switch (action.type) {
		case "GET_DATA":
			return action.payload;
		default:
			return state;
	}
};

const UserReducer = (state = [], action) => {
	switch (action.type) {
		case "GET_USER":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default combineReducers({
	blogs: initialState,
	user: UserReducer,
});
