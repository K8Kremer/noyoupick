import '../NumberOfPeopleForm.css';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchRestaurants} from '../actions';


class NumberOfPeopleForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    //ternary adds red coloring if there is an error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className='form-control' type='text' {...field.input} />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(value) {
    //need to add number of players through action - done
    // this.props.setVoters(value.num);
    this.props.fetchRestaurants(value.num);
  }

  render() {
    //pretty sure this is given to props by redux form
    const { handleSubmit } = this.props;

    return (
      <div className='row'>
        <div className='col'></div>
        <div className='col-8'>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
            <Field
              label='Number of Voters:'
              name='num'
              component={this.renderField}
            />
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
        <div className='col'></div>
      </div>
    );
  }
}

function validate(formValues) {
  const errors = {};

  if (!formValues.num) {
    errors.num = 'Enter a number';
  }

  //add validation - if not number
  if (isNaN(+formValues.num)){
    errors.num = 'Not a valid number.';
  }

  if (formValues.num < 1) {
    errors.num = 'Enter a number greater than 0.';
  }

  //number starting with 0
  //need to check if formValues.num is undefined first or it gets mad
  if (formValues.num && formValues.num.charAt(0) === '0') {
    errors.num = 'Cannot start with zero.';
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRestaurants }, dispatch);
}

const numVotersForm = reduxForm({
  validate,
  form: 'numVoters'
})(NumberOfPeopleForm);

export default connect(null, mapDispatchToProps)(numVotersForm);
