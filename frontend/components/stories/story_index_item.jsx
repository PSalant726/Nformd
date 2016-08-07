const React = require('react');
const TimeAgo = require('react-timeago').default;
const Link = require('react-router').Link;

const StoryIndexItem = React.createClass({
  author(){
    if(this.props.story.author.fname){
      if(this.props.story.author.lname){
        return this.props.story.author.fname + " " + this.props.story.author.lname;
      } else {
        return this.props.story.author.fname;
      }
    } else {
      return this.props.story.author.username;
    }
  },

  render(){
    return(
      <li className="listed-story">
        <div className="group story-details-container">
          <div className="story-details-image">
            <div className="image-container">
              <a className="story-avatar-image-placeholder" />
            </div>
            <div className="story-details">
              <a className="story-author">{ this.author() }</a>
              <TimeAgo
                date={ this.props.story.created_at }
                className="story-timeago" />
              <span className="divider" />
              <p className="story-readtime">
                { this.props.story.read_time }
              </p>
            </div>
          </div>
        </div>
        <Link
          to={ `/stories/${this.props.story.id}` }
          className="story-title">{ this.props.story.title }</Link>
        <Link
          to={ `/stories/${this.props.story.id}` }
          className="story-preview">{ this.props.story.preview }</Link>
        <Link
          to={ `/stories/${this.props.story.id}` }
          className="story-readmore">Read more...</Link>
      </li>
    );
  }
});

module.exports = StoryIndexItem;
