import alt from '../alt';
import TodoActions from '../actions';

class TodoStore {
	constructor() {
		this.todos = [];
		this.loading = false;
		this.errorMessage = null;

		this.bindActions(TodoActions);
	}
	onFetch() {
		this.loading = true;
	}
	onReceivedTodo(todo) {
		this.todos = [...this.todos, todo];
	}
	onRemovedTodo(todoID) {
		this.todos = this.todos.filter( (todo) => (todo._id !== todoID) );
	}
	onCompleteTodo(todoID) {
		this.todos = this.todos.map( (todo) => {
			if (todo._id === todoID) {
				todo.complete = true;
			}
			return todo;
		});
	}
	onUncompleteTodo(todoID) {
		this.todos = this.todos.map( (todo) => {
			if (todo._id === todoID) {
				todo.complete = false;
			}
			return todo;
		});
	}
	onClearCompleted(uncompletedTodos) {
		this.todos = uncompletedTodos;
	}
	onFetchedTodos(todos) {
		this.loading = false;
		this.errorMessage = null;
		this.todos = todos;
	}
	onFetchFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(TodoStore);