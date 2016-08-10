const React = require('react');
const TimeAgo = require('react-timeago').default;
const Link = require('react-router').Link;

const CommentIndexItem = React.createClass({
  author(username, fname, lname){
    if (fname && lname){
      return fname + " " + lname;
    } else {
      return username;
    }
  },

  render(){
    return(
      <li className="listed-comment">
        <div className="group comment-details-container">
          <div className="comment-details-image">
            <div className="comment-avatar">
              <img src={ this.props.comment.author.avatar_url } />
            </div>
            <div className="comment-details">
              <Link
                to={ `users/${ this.props.comment.author.id }` }
                className="comment-author">
                {
                  this.author(
                    this.props.comment.author.username,
                    this.props.comment.author.fname,
                    this.props.comment.author.lname
                  )
                }
              </Link>
              <TimeAgo
                date={ this.props.comment.created_at }
                className="comment-timeago" />
              <span className="divider" />
              <p className="comment-readtime">
                { this.props.comment.read_time }
              </p>
            </div>
          </div>
        </div>
        <div className="comment-body">
          { this.props.comment.body }
        </div>
      </li>
    );
  }
});

module.exports = CommentIndexItem;
