class MapController < ApplicationController
  skip_before_action :verify_authenticity_token

  respond_to :html, :js
  def index
    #@buildings = Building.all
  end

  def show
    point = Building.new(latitude: params[:latitude], longitude: params[:longitude])

    @buildings = point.nearbys(4)
    
    #distances
    @buildings = compute_distance(@buildings, point)

    respond_to do |format|
      format.html { redirect_to root_url }
      format.js {}
    end
  end

  private

  def compute_distance(buildings, point)
    distances = {}

    buildings.each do |building|
      d = building.distance_to(point)
      distances[d] = building
    end

    distances
  end

end
