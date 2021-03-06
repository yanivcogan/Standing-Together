import React from 'react';
import "./Popup.scss";

export default class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleVisibility: props.toggleVisibility,
			width: props.width,
			height: props.height
		};
	}
	handleBackgroundClick() {
		this.state.toggleVisibility();
	}
	render() {
		return this.props.visibility?(
			<div className="popup-wrapper">
				<div className="popup-background" onClick={this.handleBackgroundClick.bind(this)}/>
				<div className="popup" style={{
					width: this.state.width ? this.state.width : "50%",
					height: this.state.height ? this.state.height : "fit-content"
				}}>
					{this.props.children}
				</div>
			</div>
		):<div/>
	}
}
