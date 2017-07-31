class CreateGameImages < ActiveRecord::Migration[5.1]
  def change
    create_table :game_images do |t|
      t.integer :game_id
      t.string :tile1
      t.string :tile2
      t.string :tile3
      t.string :tile4
      t.string :tile5
      t.string :tile6
      t.string :tile7
      t.string :tile8
      t.string :tile9
      t.string :full_image
      t.timestamps
    end
  end
end
