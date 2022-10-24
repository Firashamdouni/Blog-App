import React, { Component } from "react";
import { connect, useStore } from "react-redux";
import HeaderTitle from "./headerTitle";
import instance from "./../api";
import { fetchPostsAndUsers } from "./../actions/index";

class BlogList extends Component {
	// component
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.blogs.map((blog) => {
			return (
				<div
					style={{
						borderBottom: "1px solid",
						marginBottom: "30px",
						display: "flex",
					}}
					key={blog.id}
				>
					<img
						height={"150px"}
						width={"150px"}
						style={{ margin: "0 15px 10px" }}
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
					></img>
					<div>
						<h1>{blog.title}</h1>
						<p>{blog.body}</p>
						<HeaderTitle id={blog.userId} />
					</div>
				</div>
			);
		});
	}
	render() {
		return <div>{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { blogs: state.blogs };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(BlogList);
