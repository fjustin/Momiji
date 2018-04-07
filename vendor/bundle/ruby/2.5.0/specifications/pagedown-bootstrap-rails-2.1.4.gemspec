# -*- encoding: utf-8 -*-
# stub: pagedown-bootstrap-rails 2.1.4 ruby lib

Gem::Specification.new do |s|
  s.name = "pagedown-bootstrap-rails".freeze
  s.version = "2.1.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Hugh Evans".freeze]
  s.date = "2017-05-24"
  s.description = "PageDown Bootstrap for the Rails asset pipeline".freeze
  s.email = ["hugh@artpop.com.au".freeze]
  s.homepage = "http://github.com/hughevans/pagedown-bootstrap-rails".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.4".freeze
  s.summary = "This gem makes PageDown Bootstrap available in the Rails asset pipeline.".freeze

  s.installed_by_version = "2.7.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>.freeze, ["> 3.1"])
    else
      s.add_dependency(%q<railties>.freeze, ["> 3.1"])
    end
  else
    s.add_dependency(%q<railties>.freeze, ["> 3.1"])
  end
end
