const CommentApiUtil = {
  fetchComments(success){
    $.ajax({
      url: 'api/comments',
      method: 'GET',
      success
    });
  },

  fetchCommentsByStory(storyId, success){
    $.ajax({
      url: `api/stories/${storyId}/comments`,
      method: 'GET',
      success
    });
  },

  fetchCommentsByAuthor(authorId, success){
    $.ajax({
      url: `api/${authorId}/comments`,
      method: 'GET',
      success
    });
  },

  createComment(comment, success){
    $.ajax({
      url: 'api/comments',
      method: 'POST',
      data: { comment: comment },
      success
    });
  },

  updateComment(comment, success){
    $.ajax({
      url: `api/comments/${comment.id}`,
      method: 'PATCH',
      data: { comment: comment },
      success
    });
  },

  deleteComment(id, success){
    $.ajax({
      url: `api/comments/${id}`,
      method: 'DELETE',
      success
    });
  }
};

module.exports = CommentApiUtil;
