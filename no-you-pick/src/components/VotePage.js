import React, { Component } from 'react';
import Title from './title';
import RestaurantList from './RestaurantList';
import { connect } from 'react-redux';
import LocationButton from './LocationButton';
import { fetchRestaurants } from '../actions/index';
import { bindActionCreators } from 'redux';

class VotePage extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }



  renderField() {

    //placeholder - here define how ReduxForm Field is implemented
    return (
      <div></div>
    );
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.fetchRestaurants()
  }

  render() {
    return (
      <div>
        <Title />
        <LocationButton />
        <form>
          <input placeholder='Input number of people'></input>
          <button onClick={this.clickHandler} className='btn btn-primary'>Find Restaurants</button>
        </form>
        <RestaurantList />
        {this.props.testProp}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { testProp: state.restaurants.testProp };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRestaurants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
