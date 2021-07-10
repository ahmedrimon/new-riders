import React from 'react'
import './Map.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '75%',
  height: '800px',
  marginLeft: '50px',
  position: 'absolute',
  right: '50px',
  borderRadius: '5px'
};

const center = {
  lat: 23.6115,
  lng: 90.9773
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

function Map() {
  return (

    <div>
    <LoadScript
      googleMapsApiKey="AIzaSyDG8_l5uL96DE57vzJ8mLRrPGSbkrc-Sq0"
    >
      <GoogleMap
        className="map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
      <Marker
      onLoad={onLoad}
      position={center}
      />
      </GoogleMap>
    </LoadScript>
    </div>

  )
}

export default React.memo(Map)