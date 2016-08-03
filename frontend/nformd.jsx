const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app');
const LoginForm = require('./components/login_form');
const SignUpForm = require('./components/signup_form');
const SessionActions = require('./actions/session_actions');
const StoriesIndex = require('./components/stories_index');
const Modal = require('react-modal');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ StoriesIndex } />
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ SignUpForm } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function(){
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.body);
  ReactDOM.render(appRouter, document.getElementById('content'));
});
