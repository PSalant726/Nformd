const React = require('react');
const CommentStore = require('../../stores/comment_store');
const CommentActions = require('../../actions/comment_actions');
const CommentIndexItem = require('./comment_index_item');
const CommentForm = require('./comment_form');
const SessionStore = require('../../stores/session_store');

const CommentsIndex = React.createClass({
  getInitialState(){
    return({
      comments: [],
      currentUser: SessionStore.currentUser()
    });
  },

  componentDidMount(){
    this.commentListener = CommentStore.addListener(this.getComments);
    this.userListener = SessionStore.addListener(this.getCurrentUser);
    CommentActions.fetchCommentsByStory(this.props.storyId);
  },

  componentWillUnmount(){
    this.commentListener.remove();
    this.userListener.remove();
  },

  getComments(){
    this.setState({ comments: CommentStore.all() });
  },

  getCurrentUser(){
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  commentForm(){
    if(SessionStore.isUserLoggedIn()){
      return(
        <CommentForm
          currentUser={ this.state.currentUser }
          storyId={ this.props.storyId } />
      );
    } else {
      return(<div />);
    }
  },

  render(){
    let _comments = this.state.comments.sort(function(a, b){
      return new Date(b.created_at) - new Date(a.created_at);
    });

    let commentIndexItems = _comments.map((comment, i) => {
      return(
        <CommentIndexItem key={ i } comment={ comment } />
      );
    });

    return(
      <div className="background">
        <div className="comment-index">
          <ul className="comment-list">
            <li className="comment-list-title">Responses</li>
            { this.commentForm() }
            { commentIndexItems }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = CommentsIndex;
