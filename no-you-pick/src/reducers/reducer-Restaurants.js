import _ from "lodash";
import { FETCH_RESTAURANTS, FETCH_RESTAURANT, DELETE_RESTAURANT, SET_VOTERS, CHECK_ONE_LEFT } from "../actions";

export default function (state = {}, action){
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return _.mapKeys(action.payload.data.response.venues, "id");
    case DELETE_RESTAURANT:
      if (Object.keys(state).length == 2){
        console.log('One LEFTTTTT!')
      }
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
