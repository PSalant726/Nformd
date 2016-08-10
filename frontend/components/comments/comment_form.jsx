const React = require('react');
const CommentActions = require('../../actions/comment_actions');

const CommentForm = React.createClass({
  getInitialState(){
    return({ body: "" });
  },

  changeBody(event){
    this.setState({ body: event.target.value });
  },

  handleSubmit(event){
    event.preventDefault();
    CommentActions.createComment({
      story_id: this.props.storyId,
      author_id: this.props.currentUser.id,
      body: this.state.body
    });
    this.setState({ body: "" });
  },

  publishButton(){
    if(this.state.body === ""){
      return <div />;
    } else {
      return(
        <button
          className="publish-button commentform-publish-button"
          onClick={ this.handleSubmit }>
          Publish
        </button>
      );
    }
  },

  render(){
    return(
      <li className="listed-comment group">
        <div className="commentform-avatar">
          <img src={ this.props.currentUser.avatar_url } />
        </div>
        <div className="commentform-entryfield">
          <textarea
            className="comment-text-input"
            placeholder="Write a response..."
            onChange={ this.changeBody }
            cols="50"
            value={ this.state.body } />
          { this.publishButton() }
        </div>
      </li>
    );
  }
});

module.exports = CommentForm;
