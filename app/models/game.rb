class Game < ApplicationRecord
  belongs_to :image
  belongs_to :user

  def randomize_tiles()
    #self.tiles_order = (1..9).to_a.reverse
    self.tiles_order = (1..9).to_a.shuffle
  end

end
