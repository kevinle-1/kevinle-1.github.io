import React, { useState } from "react";
import geojsonData from "../public/assets/data/world_outline.json";
import { MapContainer, GeoJSON, Circle } from "react-leaflet";

const Map: React.FC = () => {
  const [approxUserLocation, _] = useState<
    { lat: number; lng: number } | undefined
  >({ lat: -31.953512, lng: 115.857048 }); // Perth, Australia

  // useEffect(() => {
  //   console.log("fetching location");
  //   fetch("http://ip-api.com/json/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setApproxUserLocation({
  //         lat: data.lat,
  //         lng: data.lon,
  //       });
  //     });
  // }, []);

  // const FocusPOI = () => {
  //   const map = useMap();
  //   if (approxUserLocation) {
  //     map.flyTo([approxUserLocation.lat, approxUserLocation.lng], 2, {
  //       animate: true,
  //       duration: 0.1,
  //     });
  //   }
  //   return null;
  // }

  // const icon = new Icon({
  //   iconUrl: ArrowMarker,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  //   popupAnchor: [0, -40],
  // });

  return (
    <div className="map h-full w-[120%] justify-center">
      <MapContainer
        className="ml-[-16%] h-full bg-light dark:bg-dark"
        center={[approxUserLocation?.lat || 0, approxUserLocation?.lng || 0]}
        zoom={2}
        zoomControl={false}
        scrollWheelZoom={true}
        maxZoom={4}
        minZoom={2}
        maxBounds={[
          [-200, -300],
          [200, 300],
        ]}
      >
        <GeoJSON
          // @ts-ignore :(
          data={geojsonData}
          className="geojson"
          style={() => ({
            color: document.body.classList.contains("dark")
              ? "#fbfbf6"
              : "#0d0d0d", // TODO: Load this from theme
            weight: 1.2,
            fillOpacity: 0,
            backgroundColor: "transparent",
          })}
        />

        {/* <Marker position={[51.505, -0.09]} icon={icon}/> */}
        {approxUserLocation && (
          <Circle
            className="circle"
            center={[approxUserLocation.lat, approxUserLocation.lng]}
            radius={1000000}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
