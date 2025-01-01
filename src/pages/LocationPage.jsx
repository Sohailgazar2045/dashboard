import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749, 
  lng: -122.4194, 
};

// Example 50 locations
const locations = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Location ${index + 1}`,
  lat: 37.7749 + Math.random() * 0.2 - 0.1,
  lng: -122.4194 + Math.random() * 0.2 - 0.1,
}));

const locationStats = {
  totalLocations: 50,
  locationsAddedToday: 5,
  highTrafficLocations: 12,
  averageFootfall: "350/day",
};

function LocationPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDpSEQ43ScASM31RBYErKCnly0SE1uTjW0", 
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((loc) => bounds.extend({ lat: loc.lat, lng: loc.lng }));
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Locations Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            name="Total Locations"
            icon={BarChart2}
            value={locationStats.totalLocations}
            color="#6366F1"
          />
          <StatCard
            name="Locations Added Today"
            icon={ShoppingBag}
            value={locationStats.locationsAddedToday}
            color="#10B981"
          />
          <StatCard
            name="High Traffic Locations"
            icon={Users}
            value={locationStats.highTrafficLocations}
            color="#F59E0B"
          />
          <StatCard
            name="Average Footfall"
            icon={Zap}
            value={locationStats.averageFootfall}
            color="#EF4444"
          />
        </div>

        {/* MAP */}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
              />
            ))}
          </GoogleMap>
        ) : (
          <p>Loading map...</p>
        )}
      </main>
    </div>
  );
}

export default React.memo(LocationPage);
