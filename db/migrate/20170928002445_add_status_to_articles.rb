class AddStatusToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :status, :integer,null: false,default: 0
  end
end
