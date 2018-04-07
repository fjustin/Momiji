require 'rails_helper'

RSpec.describe User, type: :model do
  describe User do
    it "nameとpasswordが入力されている" do
      user = User.new(
        name: "test_man",
        password: "da1i1ki15"
      )

      expect(user).to be_valid
    end

    it "nameがなければerror" do
      user = User.new(
        id: nil,
        email: "",
        created_at: nil,
        updated_at: nil,
        admin: nil,
        name: nil
      )

      expect(user).not_to be_valid
    end
  end
end
