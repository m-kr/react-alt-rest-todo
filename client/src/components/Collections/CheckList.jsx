import React, { Component, PropTypes } from 'react';
import { Checkbox } from '../';

export default class CheckList extends Component {
	render() {
		const mainClass = 'btn';
		const { disabled = false, getCheckedStatus, _onChange, styles = {}, _className, getLabelClass, itemLabelKey, items } = this.props;
		const fullClassName = `check-list ${_className}`;
		return (
			<ul 
				style={!items ? {display: 'none'} : {
					display: !items ? 'none' : 'block'
				}}
				className={fullClassName}
			>
				{
					items.map( (item) => {
						return (
							<li 
								key={item._id}
								style={styles}>
								<Checkbox
									_className='margin-min-right inline-block'
									_onChange={_onChange.bind(undefined, item)}
									checked={getCheckedStatus(item)}
									labelClassName={getLabelClass(item)}
									disabled={disabled}
								>{item[itemLabelKey]}</Checkbox>
							</li>								
						);
					})
				}
			</ul>
		);
	}
}

CheckList.PropTypes = {
	_onChange: PropTypes.func.isRequired,
	_className: PropTypes.string,
	getLabelClass: PropTypes.func,
	styles: PropTypes.object,
	disabled: PropTypes.bool,
	getCheckedStatus: PropTypes.func
};