import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRestaurants, getLocation } from "../actions";
import Restaurant from './Restaurant';

class RestaurantList extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  renderRestaurants(){
    console.log(this.props);
    return _.map(this.props.restaurants, restaurant =>{
      return (
           <Restaurant key={restaurant.id} restaurant={restaurant}/>
        );
    });
  }

  render() {
    return (
      <div>
        <h2 style ={{
          textAlign: 'center'
        }}> Restaurants</h2>
      <div>{this.renderRestaurants()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { restaurants: state.restaurants };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRestaurants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
