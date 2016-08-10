const React = require('react');
const CommentStore = require('../../stores/comment_store');
const CommentActions = require('../../actions/comment_actions');
const CommentIndexItem = require('./comment_index_item');

const CommentsIndex = React.createClass({
  getInitialState(){
    return({ comments: [] });
  },

  componentDidMount(){
    this.commentListener = CommentStore.addListener(this.getComments);
    CommentActions.fetchComments();
  },

  componentWillUnmount(){
    this.commentListener.remove();
  },

  getComments(){
    this.setState({ comments: CommentStore.all() });
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
            <li>Comment Form goes here!</li>
            { commentIndexItems }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = CommentsIndex;
