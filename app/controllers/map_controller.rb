class MapController < ApplicationController
  skip_before_action :verify_authenticity_token

  respond_to :html, :js
  def index
    #@buildings = Building.all
  end

  def show
    point = Building.new(latitude: params[:latitude], longitude: params[:longitude])
    
    distanses = {}
  	@buildings = point.nearbys(4)

    @buildings.each do |building|
		d = building.distance_to(point)
		distanses[d] = building   
	end
    
    @buildings = distanses.sort_by { |k, v| k }

    respond_to do |format|
      format.html { redirect_to root_url }
      format.js {}
    end
  end

end
