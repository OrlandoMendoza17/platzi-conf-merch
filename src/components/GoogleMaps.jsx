import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const GoogleMaps = () => {
  
  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const defaultCenter = {
    lat: -3.745, lng: -38.523
  }
  
  return (
    <LoadScript googleMapsApiKey={process.env.googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript> 
  )
}

export default GoogleMaps;
