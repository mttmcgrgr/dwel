class Comment < ActiveRecord::Base
  validates :comment, :user_id, :todo_id, precense: true

  belongs_to :user
  belonhs_to :todo

end
