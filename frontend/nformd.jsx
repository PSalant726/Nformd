const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app');
const SessionActions = require('./actions/session_actions');
const StoriesIndex = require('./components/stories_index');
const Modal = require('react-modal');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ StoriesIndex } />
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
