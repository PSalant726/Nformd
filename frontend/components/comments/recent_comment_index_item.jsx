const React = require('react');
const Link = require('react-router').Link;

const RecentCommentIndexItem = React.createClass({
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
            <img src={ this.props.comment.author.avatar_url } />
          </div>
          <div className="recent-comments-details">
            <Link
              to={ `users/${ this.props.comment.author.id }` }
              className="recent-comments-author">
              {
                this.author(
                  this.props.comment.author.username,
                  this.props.comment.author.fname,
                  this.props.comment.author.lname
                )
              }
            </Link> responded to
          </div>
          <br />
          <Link
            to={ `stories/${ this.props.comment.story_id }` }
            className="recent-comments-story-title">
            { this.props.comment.story.title }
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = RecentCommentIndexItem;
