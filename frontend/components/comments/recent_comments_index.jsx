const React = require('react');
const CommentStore = require('../../stores/comment_store');
const CommentActions = require('../../actions/comment_actions');
const SessionStore = require('../../stores/session_store');
const RecentCommentIndexItem = require('./recent_comment_index_item');

const RecentCommentsIndex = React.createClass({
  getInitialState(){
    return {
      comments: [],
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount(){
    this.commentListener = CommentStore.addListener(this.getComments);
    this.userListener = SessionStore.addListener(this.getCurrentUser);
    CommentActions.fetchComments();
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

  recentComments(){
    let _comments = this.state.comments.sort(function(a, b){
      return new Date(b.created_at) - new Date(a.created_at);
    });

    this.commentIndexItems = _comments.map((comment, i) => {
      return(
        <RecentCommentIndexItem key={ i } comment={ comment } />
      );
    });

    return this.commentIndexItems.slice(0, 5);
  },

  render(){
    return(
      <div className="recent-comments-index">
        <h3 className="recent-comments-title">Recent Responses</h3>
        <h4 className="recent-comments-subtitle">Responses left most recently</h4>
        { this.recentComments() }
      </div>
    );
  }
});

module.exports = RecentCommentsIndex;
