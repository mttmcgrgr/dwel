class Todo < ActiveRecord::Base
  validates :group_id, :body, :type, presence: true

  belongs_to :group
  has_many :comments
end
