import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


export class ThemeToggle extends Component {
	static contextType = ThemeContext
	render() {
		const {toggleTheme} = this.context
		return <div style={{display:"flex",justifyContent:'center', alighItem:"center"}}>
			<button onClick={toggleTheme} style={{padding:10, borderRadius:12, border: 0.5, }}>switch mode</button>
		</div>;
	}
}

export default ThemeToggle;
