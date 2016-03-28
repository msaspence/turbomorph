$LOAD_PATH.unshift File.expand_path("../lib", __FILE__)
require 'turbomorph/version'

Gem::Specification.new do |s|
  s.name        = 'turbomorph'
  s.version     = Turbomorph::VERSION
  s.date        = '2015-03-28'
  s.summary     = "Turbo Morph brings morphdom to turbolinks"
  s.description = "Monkey patches turbolinks to morph your DOM between two different pages rather than just subbing out the body."
  s.authors     = ["Matthew Spence"]
  s.email       = 'msaspence@gmail.com'
  s.files       = Dir["src/turbomorph/*.coffee", "lib/assets/javascripts/*.js", "lib/turbomorph.rb", "lib/turbomorph/version.rb", "README.md", "LICENSE"]
  s.homepage    =
    'https://github.com/msaspence/turbomorph#readme'
  s.license       = 'MIT'

  s.add_runtime_dependency 'turbolinks', '>= 5.0.0.beta.2'

  s.add_development_dependency 'coffee-script'
  s.add_development_dependency 'sprockets'
  s.add_development_dependency 'uglifier'
end
