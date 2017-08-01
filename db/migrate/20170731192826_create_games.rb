class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.belongs_to :game_image, foreign_key: true
      t.integer :moves, default: 0
      t.string :tiles_order
      t.timestamps
    end
  end
end
