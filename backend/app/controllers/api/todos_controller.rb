class Api::TodosController < ApplicationController

  def create
    @todo = Todo.new(todo_params)
    @todo.group_id = current_user.group.id
    @todo.resolved = false
    if @todo.save
      render 'api/todos/index'
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    @todos = Todo.where(group_id: params[:groupId])
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render :index
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:body, :type, :groupId)
  end
end
