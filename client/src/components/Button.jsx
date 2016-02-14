import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
	render() {
		const mainClass = 'btn';
		const { disabled = false, size, type, _onClick, styles = {}, _className } = this.props;

		let fullClassName = mainClass;
		if (type) {
			fullClassName += ` ${type}`;
		}
		if (size) {
			fullClassName += ` ${size}`;
		}
		if (_className) {
			fullClassName += ` ${_className}`;
		}

		return (
			<button 
				className={fullClassName}
				onClick ={_onClick}
				style={styles}
				disabled={disabled}
			>{this.props.children}</button>
		);
	}
}

Button.PropTypes = {
	_onClick: PropTypes.func.isRequired,
	type: PropTypes.string,
	size: PropTypes.string,
	_className: PropTypes.string,
	styles: PropTypes.object,
	disabled: PropTypes.bool
};