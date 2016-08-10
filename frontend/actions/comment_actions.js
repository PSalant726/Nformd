const CommentApiUtil = require('../util/comment_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants');

const CommentActions = {
  fetchComments(){
    CommentApiUtil.fetchComments(this.receiveAllComments);
  },

  createComment(comment){
    CommentApiUtil.createComment(comment, this.receiveComment);
  },

  editComment(comment){
    CommentApiUtil.updateComment(comment, this.receiveComment);
  },

  deleteComment(id){
    CommentApiUtil.deleteComment(id, this.removeComment);
  },

  receiveAllComments(comments){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveComment(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  removeComment(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_REMOVED,
      comment: comment
    });
  }
};

module.exports = CommentActions;
