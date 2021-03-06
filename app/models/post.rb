# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#
# Indexes
#
#  index_posts_on_author_id  (author_id)
#
class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :comments,
  foreign_key: :post_id,
  class_name: :Comment
end
