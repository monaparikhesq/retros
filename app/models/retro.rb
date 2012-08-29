class Retro < ActiveRecord::Base
  attr_accessible :sprint, :team_id
  
  has_many :notes
  belongs_to :team
end
