const React = require('react');
const StoryStore = require('../../stores/story_store');
const StoryActions = require('../../actions/story_actions');
const StoryIndexItem = require('./story_index_item');
const SessionStore = require('../../stores/session_store');
const Link = require('react-router').Link;

const StoriesIndex = React.createClass({
  getInitialState(){
    return({ stories: [] });
  },

  componentDidMount(){
    this.storyListener = StoryStore.addListener(this.getStories);
    StoryActions.fetchStories();
  },

  componentWillUnmount(){
    this.storyListener.remove();
  },

  getStories(){
    this.setState({ stories: StoryStore.all() });
  },

  writeStoryLink(){
    if(SessionStore.isUserLoggedIn()){
      return(
        <Link to={ "stories/new" }>
          <li className="listed-story inline-link">Write a story</li>
        </Link>
      );
    }
  },

  render(){
    let _stories = this.state.stories.sort(function(a,b){
      return new Date(b.created_at) - new Date(a.created_at);
    });

    let storyIndexItems = _stories.map((story, i) => {
      return(
        <StoryIndexItem key={ i } story={ story } />
      );
    });

    return(
      <div className="background">
        <div className="story-index">
          <ul className="story-list">
            { this.writeStoryLink() }
            { storyIndexItems }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = StoriesIndex;
