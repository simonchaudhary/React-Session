import React, {Component} from "react";
import Counter from "./components/Counter";

export default class App extends Component {
	render() {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h2>Simple Counter</h2>
				<Counter />
			</div>
		);
	}
}
