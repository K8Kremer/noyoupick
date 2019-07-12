import _ from "lodash";
import { FETCH_RESTAURANTS, FETCH_RESTAURANT, DELETE_RESTAURANT, SET_VOTERS } from "../actions";

const defaultObject = {};

export default function (state = defaultObject, action){
  switch (action.type) {
    case FETCH_RESTAURANTS:
    console.log(action.payload)
      return _.mapKeys(action.payload.data.response.venues, "id");
    case DELETE_RESTAURANT:
      return _.omit(state, action.payload);
    // case SET_VOTERS:
    //   console.log(action.payload)
    //   return {...state, numVoters: action.payload}
    // case FETCH_RESTAURANT:
    //   return {...state, {action.payload.data.response.venues.id}:}
    // case DELETE_RESTAURANT:
    //   return
    default:
      return state;
  }
}
