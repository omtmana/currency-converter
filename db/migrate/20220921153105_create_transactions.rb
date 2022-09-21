class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.integer :value
      t.string :user_id

      t.timestamps
    end
  end
end
