class Game < ApplicationRecord

  has_one :game_image

  attr_accessor :moves

  @@all = []

  def self.all
    @@all
  end
end
