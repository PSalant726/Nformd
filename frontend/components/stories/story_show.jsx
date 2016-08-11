const React = require('react');
const StoryStore = require('../../stores/story_store');
const StoryActions = require('../../actions/story_actions');
const CommentsIndex = require('../comments/comments_index.jsx');
const CommentStore = require('../../stores/comment_store');
const SessionStore = require('../../stores/session_store');
const TimeAgo = require('react-timeago').default;
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;

let _story = {
  created_at: "",
  author: {
    username: "",
    bio: "",
    bio_preview: ""
  }
};

const StoryShow = React.createClass({

  getInitialState(){
    return ({ story: _story });
  },

  componentDidMount(){
    this.storyListener = StoryStore.addListener(this.handleChange);
    this.commentListener = CommentStore.addListener(this.handleChange);
    StoryActions.getStory(parseInt(this.props.params.id));
  },

  componentWillUnmount(){
    this.storyListener.remove();
    this.commentListener.remove();
  },

  handleChange(){
    const thisStory = StoryStore.find(this.props.params.id);
    this.setState({ story: thisStory ? thisStory : _story });
  },

  author(username, fname, lname){
    if (fname && lname){
      return fname + " " + lname;
    } else {
      return username;
    }
  },

  deleteButton(){
    if(SessionStore.currentUser().username === this.state.story.author.username){
      return(
        <button
          className="show-delete-story"
          onClick={ this.handleDeleteStory }>
          Delete this Story
        </button>
      );
    } else {
      return(<div />);
    }
  },

  handleDeleteStory(){
    StoryActions.deleteStory(this.state.story.id);
    hashHistory.push('/');
  },

  render(){
    let timeAgo;
    if (this.state.story.created_at === ""){
      timeAgo = "";
    } else {
      timeAgo = <TimeAgo date={ this.state.story.created_at } className="show-timeago" />;
    }

    let author;
    if (this.state.story.author.username === ""){
      author = "";
    } else {
      author = this.author(
        this.state.story.author.username,
        this.state.story.author.fname,
        this.state.story.author.lname
      );
    }

    return(
      <div className="full-story">
        <div className="show-details-image">
          <div className="show-avatar">
            <img src={ this.state.story.author.avatar_url } />
          </div>
          <div className="show-details">
            { this.deleteButton() }
            <Link
              to={ `/users/${ this.state.story.author.id }` }
              className="show-author">
              { author }
            </Link>
            <p className="show-author-bio">
              { this.state.story.author.bio_preview }
            </p>
            <div className="show-posted-readtime">
              { timeAgo }
              <span className="divider" />
              <p className="show-readtime">
                { this.state.story.read_time }
              </p>
            </div>
          </div>
        </div>
        <div className="show-story-container">
          <h1 className="show-title">{ this.state.story.title }</h1>
          <p className="show-body">{ this.state.story.body }</p>
        </div>
        <div className="show-comments-section group">
          <CommentsIndex storyId={ this.props.params.id } />
        </div>
      </div>
    );
  }
});

module.exports = StoryShow;
