const React = require('react');
const TimeAgo = require('react-timeago').default;

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
      <li>
        <p>{ this.author() }</p>
        <TimeAgo date={ this.props.story.created_at } />
        <h1>{ this.props.story.title }</h1>
        <p>{ this.props.story.body }</p>
        <br></br>
      </li>
    );
  }
});

module.exports = StoryIndexItem;
