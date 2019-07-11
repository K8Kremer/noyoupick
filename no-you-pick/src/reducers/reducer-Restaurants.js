import _ from "lodash";
import { FETCH_RESTAURANTS, FETCH_RESTAURANT, DELETE_RESTAURANT } from "../actions";

const defaultObject = {};

export default function (state = defaultObject, action){
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return _.mapKeys(action.payload.nearby_restaurants, "id");
    default:
      return state;
  }
}