import _ from "lodash";
import { FETCH_RESTAURANTS, FETCH_RESTAURANT, DELETE_RESTAURANT, SET_VOTERS } from "../actions";

const defaultObject = {
  numVoters: 1
};

export default function (state = defaultObject, action){
  switch (action.type) {
    case FETCH_RESTAURANTS:
    console.log(action.payload)
      return _.mapKeys(action.payload.data.response.venues, "id");
    case SET_VOTERS:
      return {...state, numVoters: action.payload}
    // case FETCH_RESTAURANT:
    //   return {...state, {action.payload.data.response.venues.id}:}
    // case DELETE_RESTAURANT:
    //   return
    default:
      return state;
  }
}
