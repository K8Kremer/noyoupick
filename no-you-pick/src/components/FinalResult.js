import '../FinalResult.css';
import React from 'react';
import Title from './title';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const FinalResult = ({ restaurant }) => {
  //should only have one restaurant in restaurant object
  // even if we have more than one, will only use first object's key
  const restaurantId = Object.keys(restaurant)[0];
  const lastRestaurant = restaurant[restaurantId];

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
      <div className='row'>
        <div className='col'></div>
        <div className='col-md-4'>
          <div className='card text-center w-80 shadow p-3 mb-5 bg-white rounded'>
            <img className='card-img-top'src='https://images.freshop.com/1898839853949256474/eb93e944c27796a842f48d899224623d_medium.png' alt='' />
            <div className='card-body'>
              <h3 className='card-text'>{lastRestaurant.name}</h3>
              <p className='card-text'>{lastRestaurant.location.formattedAddress[0]}, {lastRestaurant.location.formattedAddress[1]}</p>
            </div>
          </div>
      </div>
      <div className='col'></div>
    </div>
    </div>
  );
};


// should only get to FinalResult component when restaurants only has one object left
function mapStateToProps(state) {
  return { restaurant: state.restaurants };
}

export default connect(mapStateToProps, null)(FinalResult);
