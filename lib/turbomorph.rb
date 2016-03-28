require 'turbomorph/version'

module Turbomorph

  def self.asset_path
    File.expand_path("../../assets/javascripts", __FILE__)
  end

  class Engine < ::Rails::Engine
    config.assets.paths += [Turbomorph.asset_path]
  end

end
