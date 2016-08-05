const React = require('react');

const StoryIndexItem = React.createClass({
  render(){
    return(
      <li>
        <h1>{ this.props.story.title }</h1>
        <p>{ this.props.story.body }</p>
        <br></br>
      </li>
    );
  }
});

module.exports = StoryIndexItem;
