import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRestaurants } from "../actions";


class RestaurantList extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div>
        List of Restaurants
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
