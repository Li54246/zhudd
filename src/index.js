import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
// Render the main component into the dom


ReactDOM.render(
	<App/>, document.getElementById('app'));
