import alt from '../alt';
import * as API from '../api';

/**
 * All posibility todo application action declarations. Use API to send request to server and trigger result action on response success (catch all errors and display on console);
 */
class TodoActions {
	fetch() {
	  	return (dispatch) => {
	  		dispatch();
			return API._get().then((res) => this.fetchedTodos(res.data)).catch((res) => this.fetchFailed(res.message));
		};
	}
	add(todo) {
		if (!todo || !todo.length) {
			return;
		}	
		return (dispatch) => {
			return API._post(todo).then( (res) => this.receivedTodo(res.data)).catch((res) => console.error(res.message));
		};
	}
	remove(todoID) {
		return (dispatch) => {
			return API._delete(todoID).then(() => this.removedTodo(todoID)).catch((res) => console.error(res.message));
		};
	}
	toggleTodoState(todo) {
		return (dispatch) => {
			return API._update(todo).then( () => {
				if (todo.complete) {
					this.completeTodo(todo._id);
				} else {
					this.uncompleteTodo(todo._id);
				}
			}).catch((res) => console.error(res.message));
		};
	}
	removeCompleted(todos) {
		return (dispatch) => {
			let completedTodos = todos.filter(t => t.complete);
			let uncompletedTodos = todos.filter(t => !t.complete);
			if (!completedTodos.length) {
				return;
			}
			let clearRequests = [];
			completedTodos.forEach(t => {
				clearRequests.push(API._delete(t._id));
			});
			return API._whenAll(clearRequests).then( () => this.clearCompleted(uncompletedTodos)).catch((res) => console.error(res.message));
		};
	}
	fetchedTodos(todos) {
		return todos;
	}
	removedTodo(todoID) {
		return todoID;
	}
	receivedTodo(todo) {
		return todo;
	}
	completeTodo(todoID) {
		return todoID;
	}
	uncompleteTodo(todoID) {
		return todoID;
	}
	clearCompleted(uncompletedTodos) {
		return uncompletedTodos;
	}
	fetchFailed(errorMessage) {
	  return errorMessage;
	}
}

export default alt.createActions(TodoActions);