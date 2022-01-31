import React, {Component} from "react";
import Button from "../Button";

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {count: 0};
	}

	increment = () => {
		this.setState((prev) => {
			console.log("prev", prev);
			return {
				count: prev.count + 1,
			};
		});
	};
	decrement = () => {
		this.setState((prev) => {
			console.log("prev", prev);
			return {
				count: prev.count - 1,
			};
		});
	};

	render() {
		return (
			<div style={{display: "flex", alignItems: "center"}}>
				<Button label="+" onClick={this.increment} />
				<p style={{width: "30px", textAlign: "center"}}>
					{this.state.count}
				</p>
				<Button label="-" onClick={this.decrement} />
			</div>
		);
	}
}
