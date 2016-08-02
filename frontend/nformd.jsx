const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const App = React.createClass({
  render(){
    return <div>{this.props.children}</div>;
    }
  });

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>

    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(appRouter, document.getElementById('content'));
});
