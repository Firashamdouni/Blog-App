import React from "react";
import { Provider } from "react-redux";
import reducers from "../reducers";
import BlogList from "./BlogList";
import { createStore } from "redux";

const App = () => {
	return (
		<div className="ui container">
			{" "}
			<BlogList />{" "}
		</div>
	);
};

export default App;
