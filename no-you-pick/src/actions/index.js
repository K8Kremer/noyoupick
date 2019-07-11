import axios from "axios";

export const FETCH_RESTAURANTS = "fetch_restaurants";
export const FETCH_RESTAURANT = "fetch_restaurant";
export const GET_LOCATION = "get_location";
export const DELETE_RESTAURANT = "delete-restaurant";

const ROOT_URL = "https://developers.zomato.com/api/v2.1/"
const API_KEY = "00d6fbb1214ed45546c6722bb7533af9"

// export function getLocation() {
//
//   return {
//     type: GET_LOCATION,
//     payload:
//   }
// }

// HARD CODED FOR TESTING DEFAULT TO DURHAM LON AND LAT
export function fetchRestaurants(lat=35.99, lon=-78.89) {
  const config = { headers: {'user-key': '00d6fbb1214ed45546c6722bb7533af9'} };
  const request = axios.get(`${ROOT_URL}/geocode?lat=${lat}&lon=${lon}`, config);
  console.log(request);
  return {
    type: FETCH_RESTAURANTS,
    payload: request
  };
}
