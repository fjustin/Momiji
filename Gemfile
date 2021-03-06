source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# ruby
ruby '2.5.0'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.2.2'

# activestorage and activejob
gem "activestorage", ">= 5.2.1.1"
gem "activejob", ">= 5.2.1.1"

# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
gem 'bootstrap-sass'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# tag
gem 'acts-as-taggable-on'

# Use the image
gem 'carrierwave'
gem 'rmagick'

# Use the login function
gem 'devise'

# add admin function
gem 'rails_admin'
gem 'cancan'

# Use pagination
gem 'kaminari'

# Add search function
gem 'ransack'

# smartphone design
gem 'rack-user_agent'

# markdown
gem 'redcarpet'
gem 'coderay'


# cloud
gem 'cloudinary'


# google analytics
gem 'google-analytics-rails'

# meta-tag setting
gem 'meta-tags'
# ogp setting
gem 'settingslogic'

# jquery-turbolinks
# gem 'jquery-turbolinks'

# font-awesome
gem 'font-awesome-rails'

# form of markdown
gem 'simple_form'
gem 'pagedown-bootstrap-rails'

gem 'rails-i18n'
gem 'bootsnap', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'factory_bot'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
