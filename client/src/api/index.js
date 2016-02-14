import $ from 'jquery';
import axios from 'axios';
import when from 'when';

const API_URL = window.location + 'api/todos/';

export function _get(taskID) {	
	return axios.get( API_URL + (taskID || '') );
}

export function _post(task) {	
	return axios.post(API_URL, {
		task,
		complete: false
	});
}

export function _update(todo) {
	return axios.put(API_URL + todo._id,todo);
}

export function _delete(taskID) {	
	return axios.delete(API_URL + taskID);
}

export function _whenAll(requestArray) {
	return axios.all(requestArray);
}