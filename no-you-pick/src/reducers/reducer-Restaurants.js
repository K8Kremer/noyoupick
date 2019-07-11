import _ from "lodash";
import { FETCH_RESTAURANTS, FETCH_RESTAURANT, DELETE_RESTAURANT } from "../actions";

const defaultObject = {};

export default function (state = defaultObject, action){
  switch (action.type) {
    case FETCH_RESTAURANTS:
    console.log(action.payload)
    debugger;
      return _.mapKeys(action.payload.data.response.venues, "id");
    default:
      return state;
  }
}
