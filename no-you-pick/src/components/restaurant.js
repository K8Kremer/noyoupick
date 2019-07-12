import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteRestaurant, checkOneLeft } from "../actions";

//QUESTION -
// would it have been better to keep Restaurant as a pure function (not class) component
// and made the delete button a separate component that received the dispatch from redux store?

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
    this.props.checkOneLeft();
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div className='card text-center'>
        <div className='card-body'>
          <h5 className='card-title'>{restaurant.name}</h5>
          <p className='card-text'>{restaurant.location.address}</p>
          <button className="btn btn-danger pull-xs-right" onClick={this.handleDeleteClick} >Delete</button>
        </div>
        <div className='card-footer text-muted'>
          {restaurant.categories[0].name}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteRestaurant, checkOneLeft }, dispatch);
}

export default connect(null, mapDispatchToProps)(Restaurant);
