const React = require('react');
const StoryStore = require('../../stores/story_store');
const StoryActions = require('../../actions/story_actions');
const StoryIndexItem = require('./story_index_item');

const StoriesIndex = React.createClass({
  getInitialState(){
    return({
      stories: []
    });
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

  render(){
    let storyIndexItems = this.state.stories.map((story, i) => {
      return(
        <StoryIndexItem key={ i } story={ story } />
      );
    });

    return(
      <div className="story-index">
        <ul>
          { storyIndexItems }
        </ul>
      </div>
    );
  }
});

module.exports = StoriesIndex;
