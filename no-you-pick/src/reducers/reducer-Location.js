import { GET_LOCATION } from '../actions';

export default function (state = { lat: null, lon: null, hasCoords: false }, action) {
  switch(action.type) {
    case GET_LOCATION:
      return {
        lat: action.payload.coords.latitude,
        lon: action.payload.coords.longitude,
        hasCoords: true
      };
    default:
      return state;
  }
};