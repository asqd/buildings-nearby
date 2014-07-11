# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def get_address(latitude, longitude)

  uri = URI.parse("http://maps.googleapis.com/maps/api/geocode/json?latlng=#{latitude},#{longitude}&sensor=true_or_false&language=ru")

  http = Net::HTTP.new(uri.host, uri.port)
  request = Net::HTTP::Get.new(uri.request_uri)

  response = http.request(request)

  result = JSON.parse(response.body) if response.code == "200"

  result["results"][0].fetch("formatted_address")
end

def get_random_building(area)
  lat = rand(area[0]..area[2])
  lon = rand(area[1]..area[3])
  latlon = [lat, lon]
end

area = Geocoder::Calculations.bounding_box("Moscow", 15)

i = 0
while i < 50 
  b = Geocoder.search(get_random_building(area))[0]

  if b.types.include?"street_address"
    Building.create(address: b.formatted_address, latitude: b.latitude, longitude: b.longitude )
    i += 1
  end
  
  sleep(1)
end
