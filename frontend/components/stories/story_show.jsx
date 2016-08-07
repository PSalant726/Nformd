const React = require('react');
const StoryStore = require('../../stores/story_store');
const StoryActions = require('../../actions/story_actions');
const TimeAgo = require('react-timeago').default;

const StoryShow = React.createClass({
  // TODO: How do I update the Store before the component's initial render?
  //  Going from the StoriesIndex to the StoryShow page is fine, but you cannot
  //  go directly to the StoryShow page without encountering an error.
  getInitialState(){
    return ({
      story: {
        created_at: "",
        author: {
          username: "",
          bio: "",
          bio_preview: ""
        }
      }
    });
  },

  componentDidMount(){
    this.storyListener = StoryStore.addListener(this.handleChange);
    StoryActions.getStory(parseInt(this.props.params.id));
  },

  componentWillUnmount(){
    this.storyListener.remove();
  },

  handleChange(){
    const thisStory = StoryStore.find(this.props.params.id);
    this.setState({ story: thisStory ? thisStory : {} });
  },

  author(username, fname, lname){
    if (fname && lname){
      return fname + " " + lname;
    } else {
      return username;
    }
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
          <div className="image-container">
            <a className="show-avatar-image-placeholder" />
          </div>
          <div className="show-details">
            <a className="show-author">{ author }</a>
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
        <div className="show-comments-section">
          Comments will go here!
        </div>
      </div>
    );
  }
});

module.exports = StoryShow;
