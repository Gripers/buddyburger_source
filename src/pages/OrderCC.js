import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const [userLat, setUserLat] = React.useState(0);
  const [userLong, setUserLong] = React.useState(0);

  const center = {
    lat: userLat,
    lng: userLong,
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLat(position.coords.latitude);
      setUserLong(position.coords.longitude);
    });
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBcFiYV2Ilo0KUzhl0jhAg_QDDGIQcnudA">
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerClassName="map-container"
      />
    </LoadScript>
  );
};

export default Map;
