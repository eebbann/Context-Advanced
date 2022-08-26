import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{(context) => {
					const { isLightTheme, dark, light } = context;
					const theme = isLightTheme ? light  : dark;
					return (
						<div
							className="book-list"
							style={{ color: theme.syntax, background: theme.bg }}
						>
							<ul>
								<li style={{ background: theme.ui }}>The intruder </li>
								<li style={{ background: theme.ui }}>The final destination</li>
								<li style={{ background: theme.ui }}>
									The way to the final touch
								</li>
							</ul>
						</div>
					);
				}}
			</ThemeContext.Consumer>
		);
	}
}
export default BookList;
