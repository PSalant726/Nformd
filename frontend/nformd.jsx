const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app');
const SessionActions = require('./actions/session_actions');
const StoriesIndex = require('./components/stories/stories_index');
const StoryShow = require('./components/stories/story_show');
const StoryForm = require('./components/stories/story_form');
const Modal = require('react-modal');
const UserShow = require('./components/user/user_show');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="stories/new" component={ StoryForm } />
    <Route path="/" component={ App }>
      <IndexRoute component={ StoriesIndex } />
      <Route path="stories/" component={ StoriesIndex } />
      <Route path="stories/:id" component={ StoryShow } />
      <Route path="users/:id" component={ UserShow } />
    </Route>
  </Router>
);


const FollowingApiUtil = require('./util/following_api_util');
const FollowingStore = require('./stores/following_store');
window.followApi = FollowingApiUtil;
window.followStore = FollowingStore;



document.addEventListener("DOMContentLoaded", function(){
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.body);
  ReactDOM.render(appRouter, document.getElementById('content'));
});
