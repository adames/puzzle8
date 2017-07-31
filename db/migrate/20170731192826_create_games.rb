class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :moves, default: 0
      t.timestamps
    end
  end
end
