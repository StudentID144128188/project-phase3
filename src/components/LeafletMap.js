import React from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

const LeafletMap = ({ coord0, coord1, popup }) => {
  return (
    <>
      <MapContainer center={[coord0, coord1]} zoom={13} scrollWheelZoom={false} >
        <TileLayer url="http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png" />
        <Marker position={[coord0, coord1]} >

          <Popup>{popup}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

LeafletMap.defaultProps = {
  coord0: 51.5,
  coord1: -0.09,
  popup: "Find your place"
};

export default LeafletMap;
