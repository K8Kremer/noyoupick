import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRestaurant, deleteRestaurant } from "../actions";

class Restaurant extends Component{


  render (){
    <div>Restaurant</div>

    return (
      <div>
      <button
        className="btn btn-danger pull-xs-right">Delete</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchRestaurant, deleteRestaurant}, dispatch)
}
export default connect(null, mapDispatchToProps) (Restaurant);
