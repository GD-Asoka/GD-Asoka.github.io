# frozen_string_literal: true

source "https://rubygems.org"
#gemspec

gem "jekyll", "~> 3.6.0"
gem 'jekyll-admin', group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-paginate", "~> 1.1.0"
  gem "jekyll-linkpreview", "~> 0.1"
end

require 'rbconfig'
  if RbConfig::CONFIG['target_os'] =~ /darwin(1[0-3])/i
    gem 'rb-fsevent', '<= 0.9.4'
  end
