require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Nav from './nav'
import Long from './long.js'
import Footer from './footer.js'
import Com from './component.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
	        <div className="notice">
	        	<Router>
					<Switch>
						<Route exact path='/' component={Com}  />
						<Route path='/knowApp' component={Nav}  />
						<Route path='/home' component={Com}  />
						<Route path='/longrent' component={Long}  />
						<Route path='/shortRent' component={Nav}  />
						<Route path='/recruit' component={Nav}  />
						<Route path='/pinpai' component={Nav}  />
					</Switch>
				</Router>
	        </div>
	       
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
