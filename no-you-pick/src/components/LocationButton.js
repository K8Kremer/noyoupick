import React from 'react';

//currently just renders 'We have your location' as we are using default Durham coordinates
// when we implement getting coordinates, this will have a button that allows browser to ask for location
// want to avoid browser asking for location on page load, bad ui

const LocationButton = () => {
  //if store does not have location render button that sends action
  //to get location from browser
  //navigator.geolocation( (position) => { position.coords.latitude ... })

  return (
    <div className='row'>
      <div className='col'></div>
      <div className='col-md-4'>
        <button type='button' className='btn btn-success btn-block'>We have your location &#10003;</button>
      </div>
      <div className='col'></div>
    </div>
  )
};

export default LocationButton;
