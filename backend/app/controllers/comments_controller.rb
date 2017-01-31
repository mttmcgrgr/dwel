class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render "api/comments/show"
    end
  end

  def comment_params
    params.require(:comment).permit(:user_id, :todo_id)
  end

end
