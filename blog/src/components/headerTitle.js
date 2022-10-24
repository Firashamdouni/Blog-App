import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "./../actions/index";

class HeaderTitle extends Component {
	render() {
		const user = this.props.user.find((user) => user.id === this.props.id);

		if (!user) {
			return null;
		}
		return <div>{user.name}</div>;
	}
}
const mapStateToProps = (state) => {
	return { user: state.user };
};

export default connect(mapStateToProps)(HeaderTitle);
