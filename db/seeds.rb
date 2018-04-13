# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


20.times do |a|
  Article.create!(
             user_id:1,
             image:open("app/assets/images/wa_2.jpg"),
             title:"和菓子の秋！#{a}回目のテスト",
             description:"#{a}回目の説明文です。これはシードデータとして投入されました。",
             content:"#{a}回目の本文です。MOMIJIは和菓子専門のメディアとして立ち上げられました。プリコンパイルがうまくいかないのでテストとしてシードデータを作成しました。プリコンパイルがうまくいかないのでテストとしてシードデータを作成しました。プリコンパイルがうまくいかないのでテストとしてシードデータを作成しました。プリコンパイルがうまくいかないのでテストとしてシードデータを作成しました。",
             status:"published"
  )
end
