import React from 'react'
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';

const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const containerStyle = {
  width: '1000px',
  height: '1000px'
};

const center = {
  lat: 34.398534,
  lng: 132.48126
};






function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA1-70vB9MlGMaod-hHgnjCOZgQhRo6Ppk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
        <StreetViewPanorama
          position={center}
          visible={true}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)