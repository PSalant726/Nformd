const React = require('react');
const ReactDOM = require('react-dom');
const LoginForm = require('./components/login_form');
const SignUpForm = require('./components/signup_form');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const App = React.createClass({
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ LoginForm } />
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ SignUpForm } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(appRouter, document.getElementById('content'));
});
