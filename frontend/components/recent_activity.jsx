const React = require('react');
const RecentCommentsIndex = require('./comments/recent_comments_index');
const RecentRecommends = require('./recent_recommends');

const RecentActivity = React.createClass({
  render(){
    return(
      <div className="recent-activity">
        <RecentCommentsIndex />
        <RecentRecommends />
      </div>
    );
  }
});

module.exports = RecentActivity;
