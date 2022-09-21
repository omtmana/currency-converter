class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.integer :birth_month
      t.integer :birth_day
      t.integer :birth_year
      t.integer :street_number
      t.string :street_name
      t.string :apartment_unit
      t.integer :apartment_number
      t.string :city
      t.string :state
      t.string :country
      t.string :village_barangay
      t.integer :zipcode
      t.integer :password_digest
      t.string :username

      t.timestamps
    end
  end
end
