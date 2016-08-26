const React = require('react');
const RecentCommentsIndex = require('./comments/recent_comments_index');
const RecentRecommendsIndex = require('./recent_recommends_index');

const RecentActivity = React.createClass({
  getInitialState(){
    return({ top: 0 });
  },

  componentDidMount(){
    window.addEventListener("scroll", this.adjustHeight);
  },

  componentWillUnmount(){
    window.removeEventListener("scroll", this.adjustHeight);
  },

  adjustHeight(){
    if (window.scrollY > 85) {
      this.setState({ top: window.scrollY - 85 });
    } else if (this.state.top !== 0) {
      this.setState({ top: 0 });
    }
  },

  render(){
    return(
      <div className="recent-activity"
        style={ { top: `${this.state.top}px` } }>
        <RecentCommentsIndex />
        <RecentRecommendsIndex />
      </div>
    );
  }
});

module.exports = RecentActivity;
