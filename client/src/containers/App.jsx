	import React, { Component, PropTypes } from 'react';
	import { Button, InputText, Checkbox, CheckList } from '../components';

	/**
	 * Main application container which is giving all event handlers to children components.
	 */
	export default class App extends Component {
		constructor(props) {
			super(props);
			this.state = {
				adding: true
			};
			this.task = '';
			this.handleClickAddButton = this.handleClickAddButton.bind(this);
			this.handleClickRemoveButton = this.handleClickRemoveButton.bind(this);
			this.keyupHandle = this.keyupHandle.bind(this);
			this.initInputHandle = this.initInputHandle.bind(this);
			this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
			this.handleClearAllDoneButton = this.handleClearAllDoneButton.bind(this);
		}
		componentWillMount() {
		    this.props.fetch();

		}
		componentWillReceiveProps(nextProps) {
			this.setState({adding: false});
		}
		initInputHandle(...inputElement) {
			inputElement[0].focus();
		}
		handleClickAddButton(e) {
			const inputElement = this.refs.input;
			this.setState({adding: true});
			this.props.add(this.task);
			this.task = '';
		}
		handleClickRemoveButton(todoID) {
			this.props.remove(todoID);
		}
		handleClearAllDoneButton(e) {
			const { removeCompleted, todos} = this.props;
			removeCompleted(todos);
		}
		handleChangeCheckbox(todo, event) {
			const { toggleTodoState } = this.props;
			toggleTodoState(Object.assign({}, todo, {complete: event.target.checked}));
		}
		keyupHandle(e) { 
			const keyCode = e.keyCode || e.charCode;
			if (keyCode === 13) {
				const inputElement = e.target;
				const { add } = this.props;
				this.setState({adding: true});
				add(this.task);
			}
			this.task = e.target.value;
		}
		render() {
			const { todos } = this.props;
			const completedTodos = todos.filter(t => t.complete);
			const uncompletedTodos = todos.filter(t => !t.complete);
			const isChecked = item => item.complete;
			const labelClassName = item => item.complete ? 'task__label--completed' : '';
			let areTodos = (todos.length > 0);
			return (
				<fieldset ref="fieldset" className="pure-form" style={{
					margin: '10px'
				}} >
					<h1>Todo app - [Alt flux, ReactJS, RESTful express server]</h1>
					<div style={{marginTop: '30px'}}>					
						<InputText
							_onKeyUp={this.keyupHandle}
							initElementFunction={this.initInputHandle}
							label='Todo task'
							reset={this.state.adding}
						/>
						<Button 
							type="primary"
							_onClick={this.handleClickAddButton}> + ADD
						</Button>
						<CheckList
							items={uncompletedTodos}
							_onChange={this.handleChangeCheckbox}
							getCheckedStatus={isChecked}
							getLabelClass={labelClassName}
							itemLabelKey='task'
						/>
						<div className={completedTodos.length ? '' : 'hidden'}>
							<h3 style={{marginBottom: '0'}}>Done:</h3>
							<CheckList
								items={completedTodos}
								_onChange={this.handleChangeCheckbox}
								getCheckedStatus={isChecked}
								getLabelClass={labelClassName}
								itemLabelKey='task'
							/>
							<hr />
							<div className="footer">
								<Button 
									type="info"
									_onClick={this.handleClearAllDoneButton}> Clear all completed tasks
								</Button>
							</div>
						</div>
					</div>
				</fieldset>
			);
		}
	}

	App.propTypes = {
	  todos: PropTypes.array.isRequired
	};

	export default App;