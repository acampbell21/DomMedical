import React, { Component } from 'react';
import { addPatient } from '../actions/patients';
import { connect } from 'react-redux';
import { Button, Form, Grid, Input } from 'semantic-ui-react';


export class PatientForm extends Component {
 state = {
   name: this.state, address: this.state, insurance: this.state,
   supplies: this.state
 };

 handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, insurance, supplies } = this.state;
    this.props.dispatch(addPatient(name, address, insurance, supplies))
  }

  render () {
    const { name, address, insurance, supplies } = this.state;

     return (
       <Grid.Column mobile={16} tablet={8} computer={4}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input
              id="name"
              value={name}
              onChange={this.handleChange}
              required
              placeholder='Name'
            />
          </Form.Field>
          <Form.Field>
            <Input
              id="address"
              value={address}
              onChange={this.handleChange}
              required
              placeholder='Address'
            />
          </Form.Field>
          <Form.Field>
            <Input
              id="insurance"
              value={insurance}
              onChange={this.handleChange}
              required
              placeholder='Insurance'
            />
          </Form.Field>
          <Form.Field>
            <Input
              id="supplies"
              value={supplies}
              onChange={this.handleChange}
              required
              placeholder='Supplies'
            />
          </Form.Field>
          <Button color='grey' type='submit'>Add Patient</Button>
        </Form>
      </Grid.Column>
    )
  }
}


export default connect()(PatientForm);
