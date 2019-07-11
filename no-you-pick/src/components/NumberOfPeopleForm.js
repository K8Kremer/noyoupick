import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//need to import an action that sets number of players
import { setVoters } from '../actions';

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
    //need to add number of players through action
    debugger;
    this.props.setVoters(value.num);
  }

  render() {
    //pretty sure this is given to props by redux form
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Field 
          label='number of voters'
          name='num'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

function validate(formValues) {
  const errors = {};

  if (!formValues.num) {
    errors.num = 'Enter a number';
  }

  //add validation - if not number

  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setVoters }, dispatch);
}

const numVotersForm = reduxForm({
  validate,
  form: 'numVoters'
})(NumberOfPeopleForm);

export default connect(null, mapDispatchToProps)(numVotersForm);