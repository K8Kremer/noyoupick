import React, { Component } from 'react';
import Title from './title';
import RestaurantList from './RestaurantList';
import NumberOfPeopleForm from './NumberOfPeopleForm';
import { connect } from 'react-redux';
import LocationButton from './LocationButton';
import { fetchRestaurants } from '../actions/index';
import { bindActionCreators } from 'redux';

class VotePage extends Component {
  render() {
    return (
      <div>
        <Title />
        <LocationButton />
        <NumberOfPeopleForm />
        <RestaurantList />
      </div>
    );
  }
}

// TODO: don't pass all state, filter what is needed
function mapStateToProps(state) {
  return {...state};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRestaurants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
