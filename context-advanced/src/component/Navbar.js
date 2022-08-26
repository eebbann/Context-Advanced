import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class NavBar extends Component {
	static contextType = ThemeContext;
	render() {
		const { isLightTheme, dark, light } = this.context;
		const theme = isLightTheme ? light : dark;
		return (
			<div
				className="book-list"
				style={{ color: theme.syntax, background: theme.ui }}
			>
				<nav>
					<h1>Context api</h1>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
						<li>Login</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default NavBar;
