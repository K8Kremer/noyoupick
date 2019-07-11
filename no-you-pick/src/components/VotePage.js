import React, { Component } from 'react';
import Title from './title';
import RestaurantList from './RestaurantList';
import { connect } from 'react-redux';

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
        <form>
          <input placeholder='Input number of people'></input>
          <button className='btn btn-primary'>Find Restaurants</button>  
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

export default connect(mapStateToProps, null)(VotePage);
