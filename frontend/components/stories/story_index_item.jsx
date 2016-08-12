const React = require('react');
const SessionStore = require('../../stores/session_store');
const RecommendActions = require('../../actions/recommend_actions');
const RecommendStore = require('../../stores/recommend_store');
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

  myRecommends(){
    let myRecs = [];
    for (let i = 0; i < this.props.recommends.length; i++){
      if(this.props.recommends[i].story_id === this.props.story.id){
        myRecs.push(this.props.recommends[i]);
      }
    }
    return myRecs.length;
  },

  recommendButton(){
    if(this.props.story.author.id === SessionStore.currentUser().id || !SessionStore.isUserLoggedIn()){
      return(
        <div className="story-recommends">
          <div className="recommend-pic" />
          { this.myRecommends() }
        </div>
      );
    } else {
      return(
        <button
          onClick={ this.recommendToggle }
          className="story-recommends">
          <div className="recommend-pic" />
          { this.myRecommends() }
        </button>
      );
    }
  },

  recommendToggle(){
    let recStoryIds = Object.keys(SessionStore.currentUser().recommended_stories).map(id => {
      return SessionStore.currentUser().recommended_stories[id];
    });
    if (recStoryIds.includes(this.props.story.id)){
      let recIds = Object.keys(SessionStore.currentUser().recommended_stories);
      for(var i = 0; i < recIds.length; i++){
        if(SessionStore.currentUser().recommended_stories[recIds[i]] === this.props.story.id){
          RecommendActions.deleteRecommend(recIds[i]);
        }
      }
    } else {
      RecommendActions.createRecommend({
        author_id: SessionStore.currentUser().id,
        story_id: this.props.story.id
      });
    }
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
