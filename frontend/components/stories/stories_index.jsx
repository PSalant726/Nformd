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
            { storyIndexItems }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = StoriesIndex;
