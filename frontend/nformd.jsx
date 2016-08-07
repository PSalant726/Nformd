const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app');
const SessionActions = require('./actions/session_actions');
const StoriesIndex = require('./components/stories/stories_index');
const StoryShow = require('./components/stories/story_show');
const Modal = require('react-modal');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ StoriesIndex } />
      <Route path="stories/" component={ StoriesIndex } />
      <Route path="stories/:id" component={ StoryShow } />
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
