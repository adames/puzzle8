class Game < ApplicationRecord
  belongs_to :game_image

  def randomize_tiles()
    #self.tiles_order = (1..9).to_a.reverse
    self.tiles_order = (1..9).to_a.shuffle
  end

end
