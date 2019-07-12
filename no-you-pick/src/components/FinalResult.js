import React, { Component } from 'react';
import Title from './title';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class FinalResult extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    //should only have one restaurant in restaurant object
    // even if we have more than one, will only use first object's key
    const restaurantId = Object.keys(this.props.restaurant)[0];
    const lastRestaurant = this.props.restaurant[restaurantId];

    if (lastRestaurant === undefined) {
      return (
        <Redirect from='/finalResult' to='/votePage' />
      );
    }
    
    return (
      <div>
        {console.log(lastRestaurant)}
        <Title />
        {/* TODO: display final restaurant - different than current restaurant snippets */}
        {/* general layout - needs styling */}
        <img src='https://images.freshop.com/1898839853949256474/eb93e944c27796a842f48d899224623d_medium.png' alt='' />
        <h3>{lastRestaurant.name}</h3>
        <p>{lastRestaurant.location.formattedAddress[0]}, {lastRestaurant.location.formattedAddress[1]}</p>
      </div>
    );
  }
}

// should only get to FinalResult component when restaurants only has one object left
function mapStateToProps(state) {
  return { restaurant: state.restaurants };
}

export default connect(mapStateToProps, null)(FinalResult);
