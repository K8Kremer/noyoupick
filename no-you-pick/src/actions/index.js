import axios from "axios";

export const FETCH_RESTAURANTS = "fetch_restaurants";
export const FETCH_RESTAURANT = "fetch_restaurant";
export const GET_LOCATION = "get_location";
export const DELETE_RESTAURANT = "delete_restaurant";
export const SET_VOTERS = "set_voters";

const CLIENT_ID = "&client_id=AUGZLXPVOKAA0ZONPNCYDWLQBUL1FQLOF5NZWCBJXLQSUTET";
const CLIENT_SECRET = "&client_secret=USTU1O2CLXSF11IG0UTDD2DJ1K10YHVXG3QXJVVUVQFJ5CTX";
const VERSION = '&v=20190711';
const RADIUS = '&radius=12874.8';
const CATEGORY_ID = '&categoryId=4d4b7105d754a06374d81259';
const ROOT_URL = 'https://api.foursquare.com/v2/venues/search?';
// HARD CODED PARLOUR VENUE_ID FOR NOW
const VENUE_ID = '515cc981e4b0d533bbfbab35';
const NUM_VOTERS = "num_voters";
const LIMIT_SEARCH = `limit=${NUM_VOTERS}`;

const COMBINED_URL = `${ROOT_URL}${CLIENT_ID}${CLIENT_SECRET}${VERSION}${CATEGORY_ID}${RADIUS}`
// export function getLocation() {
//  const coords = ...TODO
//   return {
//     type: GET_LOCATION,
//     payload: coords
//   }
// }

// HARD CODED FOR TESTING DEFAULT TO DURHAM LON AND LAT
export function fetchRestaurants(lat=35.99, lon=-78.89) {
  const request = axios.get(`${COMBINED_URL}&ll=${lat},${lon}`);
  console.log(request);
  return {
    type: FETCH_RESTAURANTS,
    payload: request
  };
}

// HARD CODED PARLOUR VENUE_ID FOR NOW
export function fetchRestaurant(){
  const request = axios.get(`https://api.foursquare.com/v2/venues/${CLIENT_ID}${CLIENT_SECRET}${VERSION}${VENUE_ID}`)
  console.log(request);
  return {
    type: FETCH_RESTAURANT,
    payload: request
  };
}

export function deleteRestaurant(id) {

  return {
    type: DELETE_RESTAURANT,
    payload: id
  }
}

// get the number of voters from the user input via the form and set
// to limit api limit
export function setVoters(lat, lon) {
  const request = axios.get(`${COMBINED_URL}&ll=${lat},${lon}${LIMIT_SEARCH}`)
  return {
    type: SET_VOTERS,
    payload: request
  }
}
