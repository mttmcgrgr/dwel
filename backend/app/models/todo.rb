class Todo < ActiveRecord::Base
  validates :group_id, :body, :type, presence: true
end
