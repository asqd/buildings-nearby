module CustomGeocode

  def get_random_building(area)
    lat = rand(area[0],area[2])
    lon = rand(area[1],area[3])
    latlon = [lat, lon]
  end
end
