import React, { Component } from 'react';

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
        <div>VotePage</div>
        <form>
          <input placeholder='Input number of people'></input>
          <button className='btn btn-primary'>Find Restaurants</button>  
        </form> 
      </div>
    );
  }
}

export default VotePage;