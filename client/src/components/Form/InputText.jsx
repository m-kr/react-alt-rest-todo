import React, { Component, PropTypes } from 'react';
import { fancyInputLabel } from '../../utils';

export default class InputText extends Component {
	componentDidMount() {
		fancyInputLabel(this.refs.inputText);

		if (this.props.initElementFunction) {
			const inputText = this.refs.inputText;
			this.props.initElementFunction(inputText);
		}
		if (this.props.onMountFunction) {
			this.props.onMountFunction();
		}
	}
	componentDidUpdate() {
		if (this.props.reset) {
			this.refs.inputText.value = '';
			this.refs.inputText.focus();
		}
	}
	render() {
		const {value, label, disabled = false, _onChange, _onKeyUp, styles = {} } = this.props;
		
		let labelElement;
		if (label) {
			labelElement = <label>{label}</label>;
		}

		return (
			<div className="input-group">
				<input
					ref='inputText'
					type='text' 
					className='form-control'
					onChange={_onChange}
					onKeyUp={_onKeyUp}
					value={value}
					style={styles}
					disabled={disabled}
				/>
				{labelElement}
			</div>
		);
	}
}

InputText.PropTypes = {
	initElementFunction: PropTypes.func,
	onMountFunction: PropTypes.func,
	_onChange: PropTypes.func,
	_onKeyUp: PropTypes.func,
	styles: PropTypes.object,
	disabled: PropTypes.bool,
	reset: PropTypes.bool,
	label: PropTypes.string
};