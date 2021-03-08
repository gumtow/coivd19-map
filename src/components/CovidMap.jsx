import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";

const CovidMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "grey",
    fillOpacity: 1,
  };

  const onEachCountry= (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name}, ${confirmedText}`);
  };

  return (
    <MapContainer style={{ height: "90vh" }} zoom={2.5} center={[0, 0]}>
      <GeoJSON
        style = {mapStyle}
        data = {countries}
        onEachFeature =  {onEachCountry}
      />
    </MapContainer>
  );
};

export default CovidMap;
