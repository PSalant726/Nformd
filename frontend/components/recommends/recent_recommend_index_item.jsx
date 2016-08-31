const React = require('react');
const Link = require('react-router').Link;

const RecentRecommendIndexItem = React.createClass({
  author(username, fname, lname){
    if (fname && lname){
      return fname + " " + lname;
    } else {
      return username;
    }
  },

  render(){
    return(
      <div className="recent-comment">
        <div className="story-details-image">
          <div className="story-avatar">
            <img src={ this.props.recommend.author.avatar_url } />
          </div>
          <div className="recent-comments-details">
            <Link
              to={ `users/${ this.props.recommend.author.id }` }
              className="recent-comments-author">
              {
                this.author(
                  this.props.recommend.author.username,
                  this.props.recommend.author.fname,
                  this.props.recommend.author.lname
                )
              }
            </Link> recommends
          </div>
          <br />
          <Link
            to={ `stories/${ this.props.recommend.story_id }` }
            className="recent-comments-story-title">
            { this.props.recommend.story.title }
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = RecentRecommendIndexItem;
