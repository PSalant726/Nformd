const React = require('react');
const SessionStore = require('../../stores/session_store');
const RecommendActions = require('../../actions/recommend_actions');
const TimeAgo = require('react-timeago').default;
const Link = require('react-router').Link;

const StoryIndexItem = React.createClass({
  author(username, fname, lname){
    if (fname && lname){
      return fname + " " + lname;
    } else {
      return username;
    }
  },

  recommendButton(){
    if(this.props.story.author.id === SessionStore.currentUser().id){
      return(
        <div className="story-recommends">
          <div className="recommend-pic" />
          { this.props.story.num_recommends }
        </div>
      );
    } else {
      return(
        <button
          onClick={ this.recommendToggle }
          className="story-recommends">
          <div className="recommend-pic" />
          { this.props.story.num_recommends }
        </button>
      );
    }
  },

  recommendToggle(){
    // NB: For now this can only add recommends. Still working on
    // removing your recommend if you click on it again.
    RecommendActions.createRecommend({
      author_id: SessionStore.currentUser().id,
      story_id: this.props.story.id
    });
  },

  render(){
    return(
      <li className="listed-story">
        <div className="group story-details-container">
          <div className="story-details-image">
            <div className="story-avatar">
              <img src={ this.props.story.author.avatar_url } />
            </div>
            <div className="story-details">
              <Link
                to={ `users/${ this.props.story.author.id }` }
                className="story-author">
                {
                  this.author(
                    this.props.story.author.username,
                    this.props.story.author.fname,
                    this.props.story.author.lname
                  )
                }
              </Link>
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
          className="story-title">
          { this.props.story.title }
        </Link>
        <Link
          to={ `/stories/${this.props.story.id}` }
          className="story-preview">
          { this.props.story.preview }
        </Link>
        <Link
          to={ `/stories/${this.props.story.id}` }
          className="story-readmore">
          Read more...
        </Link>
        <div className="story-likes-comments group">
          { this.recommendButton() }
          <Link
            to={ `/stories/${this.props.story.id}` }
            className="story-comments">
            { this.props.story.num_comments }
          </Link>
        </div>
      </li>
    );
  }
});

module.exports = StoryIndexItem;
