const React = require('react');
const StoriesIndex = require('./stories/stories_index');
const RecentActivity = require('./recent_activity');

const HomePage = React.createClass({
  render(){
    return(
      <div className="background group">
        <div className="home-page-container">
          <StoriesIndex />
          <RecentActivity />
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
