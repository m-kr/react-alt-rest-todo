import React from 'react';
import ReactDOM from 'react-dom';
import AltContainer from 'alt-container';

import App from './containers/App';
import Alt from './alt';
import TodoStore from './stores/todoStore';
import TodoActions from './actions';


ReactDOM.render(
	<AltContainer 
		store={TodoStore}
		actions={TodoActions}
		component={App}
	></AltContainer>
, document.getElementById('root'));
