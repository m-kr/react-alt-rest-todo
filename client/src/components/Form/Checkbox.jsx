import React, { Component, PropTypes } from 'react';

export default class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: props.checked
		};
	}
	componentDidMount() {
		const Checkbox = this.refs.Checkbox;
		if (this.props.initElementFunction) {
			this.props.initElementFunction(Checkbox);
		}
		if (this.props.onMountFunction) {
			this.props.onMountFunction();
		}		
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.checked !== this.props.checked) {
			this.setState({checked: nextProps.checked});			
		}
	}
	render() {
		const {value, disabled = false, _onChange, styles = {}, _className, labelClassName = '' } = this.props;
		let fullClassName = 'checkbox';
		if (_className) {
			fullClassName += ` ${_className}`;
		}
		return (
			<div className={fullClassName}>
				<label className={labelClassName}>
					<input
						ref='Checkbox'
						type='checkbox'
						onChange={_onChange}
						value={value}
						style={styles}
						checked={this.state.checked}
					/>
					{this.props.children}
				</label>
			</div>
		);
	}
}

Checkbox.PropTypes = {
	initElementFunction: PropTypes.func,
	onMountFunction: PropTypes.func,
	_onChange: PropTypes.func,
	_className: PropTypes.string,
	styles: PropTypes.object,
	disabled: PropTypes.bool,
	getCheckedStatus: PropTypes.bool,
	children: PropTypes.string,
	labelClassName: PropTypes.string
};