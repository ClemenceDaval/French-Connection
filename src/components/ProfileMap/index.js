import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import './profileMap.scss';

import '@reach/combobox/styles.css';

const ProfileMap = ({ latProp, lngProp }) => {
  const center = { lat: latProp, lng: lngProp };

  const mapContainerStyle = {
    height: '30vh',
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className="mapProfile">
      <GoogleMap
        id='map'
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <Marker
          position={{ lat: latProp, lng: lngProp }}
        />
      </GoogleMap>
    </div>
  );
};

export default ProfileMap;
