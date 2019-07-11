import React, { Component } from 'react';
import Title from './title';
import RestaurantList from './RestaurantList';

class VotePage extends Component {
  renderField() {
    
    //placeholder - here define how ReduxForm Field is implemented
    return (
      <div></div>  
    );
  }

  render() {
    return (
      <div>
        <Title />
        <RestaurantList />
        <form>
          <input placeholder='Input number of people'></input>
          <button className='btn btn-primary'>Find Restaurants</button>  
        </form> 
      </div>
    );
  }
}

export default VotePage;
