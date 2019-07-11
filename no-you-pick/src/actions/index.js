import axios from "axios";

export const FETCH_RESTAURANTS = "fetch_restaurants";
export const FETCH_RESTAURANT = "fetch_restaurant";
export const GET_LOCATION = "get_location";
export const DELETE_RESTAURANT = "delete-restaurant";

const CLIENT_ID = "AUGZLXPVOKAA0ZONPNCYDWLQBUL1FQLOF5NZWCBJXLQSUTET";
const CLIENT_SECRET = "USTU1O2CLXSF11IG0UTDD2DJ1K10YHVXG3QXJVVUVQFJ5CTX"
// export function getLocation() {
//
//   return {
//     type: GET_LOCATION,
//     payload:
//   }
// }

// HARD CODED FOR TESTING DEFAULT TO DURHAM LON AND LAT
export function fetchRestaurants(lat=35.99, lon=-78.89) {
  const request = axios.get(`https://api.foursquare.com/v2/venues/search?ll=${lat},${lon}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190711&categoryId=4d4b7105d754a06374d81259`);
  console.log(request);
  return {
    type: FETCH_RESTAURANTS,
    payload: request
  };
}
