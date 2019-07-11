import React from 'react';

const LocationButton = () => {
  //if store does not have location render button that sends action
  //to get location from browser
  //navigator.geolocation( (position) => { position.coords.latitude ... })
  
  return (
    <div>We have your location &#10003;</div>
  )
};

export default LocationButton;