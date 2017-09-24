require 'test_helper'

class AboutControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test "should get about page" do
    get about_show_url
    assert_response :success
  end
end
