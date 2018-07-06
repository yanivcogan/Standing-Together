import React from 'react';

export default class ToggleSwitch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value,
			onChangeFunction: props.handleChange
		};
	}
	handleChange(event)
	{
		this.state.onChangeFunction(event.target.checked);
	}
	render() {
		console.log(this.props);
		return (
			<div className="switch-wrap">
				<style jsx global>{`
					.switch-wrap{
						height:100%;
					}
					.switch {
						position: relative;
						display: inline-block;
						width: 3em;
						height: 100%;
					}
					
					.switch input {
						display:inline-block;
						width:0;
						visibility: none;
					}
					
					.slider {
						position: absolute;
						cursor: pointer;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						height: 1.5em;
						border-radius: 3px;
						box-sizing: border-box;
						border: 1px solid #616B6F;
						background-color: #fff;
						-webkit-transition: .4s;
						transition: .4s;
					}
					
					.slider:before {
						position: absolute;
						top: -1px;
						left: -1px;
						content: "";
						height: 1.5em;
						width: 1.5em;
						border-radius: 3px;
						background-color: #616B6F;
						-webkit-transition: .4s;
						transition: .4s;
					}
					
					input:checked + .slider {
						background-color: #FF4C94;
					}
					
					input:checked + .slider:before {
						-webkit-transform: translateX(1.5em);
						-ms-transform: translateX(1.5em);
						transform: translateX(1.5em);
					}
				`}
				</style>
				<label className="switch">
					<input type="checkbox" checked={this.props.value} onChange={(event)=>this.handleChange(event)}/>
					<span className="slider"></span>
				</label>
			</div>
		)
	}
}
