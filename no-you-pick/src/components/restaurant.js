import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { fetchRestaurant, deleteRestaurant } from "../actions";



const Restaurant =({restaurant}) => (
      <div className='card text-center'>
      <div className='card-body'>
        <h5 className='card-title'>{restaurant.name}</h5>
        <p className='card-text'>{restaurant.location.address}</p>
        <button className="btn btn-danger pull-xs-right">Delete</button>
      </div>
      <div className='card-footer text-muted'>
        {restaurant.categories[0].name}
        </div>
      </div>

    );

export default Restaurant;
