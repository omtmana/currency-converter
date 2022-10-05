class AddNameToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :name, :string 
    add_column :users, :address, :string
    add_column :users, :birthday, :string
    add_column :users, :image, :string, default: 'profile.jpeg'
  end
end
