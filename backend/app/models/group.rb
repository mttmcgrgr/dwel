class Group < ActiveRecord::Base
  validates :token, presence: true

  belongs_to :tenant,
  foreign_key: :tenant_id,
  class_name: :User

  belongs_to :landlord,
  foreign_key: :landlord_id,
  class_name: :User

end
