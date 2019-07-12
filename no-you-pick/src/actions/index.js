import axios from "axios";

export const FETCH_RESTAURANTS = "fetch_restaurants";
export const DELETE_RESTAURANT = "delete_restaurant";
export const GET_LOCATION = "get_location";

const CLIENT_ID = "&client_id=AUGZLXPVOKAA0ZONPNCYDWLQBUL1FQLOF5NZWCBJXLQSUTET";
const CLIENT_SECRET = "&client_secret=USTU1O2CLXSF11IG0UTDD2DJ1K10YHVXG3QXJVVUVQFJ5CTX";
const VERSION = '&v=20190711';
const RADIUS = '&radius=12874.8';
const CATEGORY_ID = '&categoryId=4d4b7105d754a06374d81259';
const ROOT_URL = 'https://api.foursquare.com/v2/venues/search?';


const COMBINED_URL = `${ROOT_URL}${CLIENT_ID}${CLIENT_SECRET}${VERSION}${CATEGORY_ID}${RADIUS}`
// HARD CODED FOR TESTING DEFAULT TO DURHAM LON AND LAT
export function fetchRestaurants(numVoters=1, lat=35.99, lon=-78.89) {
  const LIMIT_SEARCH = `&limit=${+numVoters + 1}`
  const request = axios.get(`${COMBINED_URL}${LIMIT_SEARCH}&ll=${lat},${lon}`);
  return {
    type: FETCH_RESTAURANTS,
    payload: request
  };
}

export function deleteRestaurant(id) {
  return {
    type: DELETE_RESTAURANT,
    payload: id
  };
}

export function getLocation(position) {
  return {
    type: GET_LOCATION,
    payload: position
  }
}