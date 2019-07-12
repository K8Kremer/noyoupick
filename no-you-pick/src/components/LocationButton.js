import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getLocation } from '../actions';
import { connect } from 'react-redux';

//currently just renders 'We have your location' as we are using default Durham coordinates
// when we implement getting coordinates, this will have a button that allows browser to ask for location
// want to avoid browser asking for location on page load, bad ui

class LocationButton extends Component {
  //if store does not have location render button that sends action
  //to get location from browser
  //navigator.geolocation( (position) => { position.coords.latitude ... })
  constructor(props) {
    super(props);

    this.getLocationClickHandler = this.getLocationClickHandler.bind(this);
  }

  getLocationClickHandler() {
    // need to error handle if user doesn't allow browser to get location or unavailable
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.getLocation(position);
    });
  }

  render() {
    const buttonText = (this.props.hasCoords) ? 'We have your location ✔' : 'Get Current Location';
    
    return (
      <div className='row'>
        <div className='col'></div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-success btn-block' onClick={this.getLocationClickHandler}>{buttonText}</button>
        </div>
        <div className='col'></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { hasCoords: state.location.hasCoords };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationButton);
