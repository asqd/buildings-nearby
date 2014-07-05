class MapController < ApplicationController
  skip_before_action :verify_authenticity_token

  respond_to :html, :js
  def index
    #@buildings = Building.all
  end

  def show
    point = Building.new(latitude: params[:latitude], longitude: params[:longitude])

    @buildings = point.nearbys(4)
    
    distanses = compute_distanse(@buildings, point)

    @buildings = distanses.sort_by { |k, v| k }

    respond_to do |format|
      format.html { redirect_to root_url }
      format.js {}
    end
  end

  private

  def compute_distanse(buildings, point)
    distanses = {}

    buildings.each do |building|
      d = building.distance_to(point)
      distanses[d] = building
    end

    distanses
  end

end
