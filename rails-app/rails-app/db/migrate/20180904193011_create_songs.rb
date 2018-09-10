class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song_name
      t.string :song_url
      t.references :album
      t.timestamps
    end
  end
end
