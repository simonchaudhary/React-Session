import React, {Component} from "react";

export default class Button extends Component {
	render() {
		return (
			<button
				style={{
					width: "30px",
					height: "30px",
					border: "none",
					background: "#f5f5f5",
					borderRadius: "8px",
				}}
				onClick={this.props.onClick}
			>
				{this.props.label}
			</button>
		);
	}
}
