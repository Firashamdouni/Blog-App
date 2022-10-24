// Action creator
import instance from "./../api/index";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	//if we call a actions creator inside another action creator must dispatch its own actions and await to wait for the list to load succesfully
	await dispatch(getBlogs());
	// const users = _.uniq(_.map(getState().blogs, "userId"));
	// users.map((id) => dispatch(getUser(id)));
	// console.log(getState());
	_.chain(getState().blogs)
		.map("userId")
		.uniq()
		.map((id) => dispatch(getUser(id)))
		.value();
};

export const getBlogs = () => {
	return async function (dispatch) {
		const response = await instance.get("/posts");
		dispatch({
			type: "GET_DATA",
			payload: response.data,
		});
	};
};

export const getUser = (id) => async (dispatch) => {
	const response = await instance.get(`/users/${id}`);
	dispatch({
		type: "GET_USER",
		payload: response.data,
	});
};

// export const getUser = (id) => (dispatch) => _getUser(id, dispatch);

// const _getUser = _.memoize(async (id, dispatch) => {
// 	const response = await instance.get(`/users/${id}`);
// 	dispatch({
// 		type: "GET_USER",
// 		payload: response.data,
// 	});
// });
