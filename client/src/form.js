import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postItem } from './actions';

class Form extends Component {

  // set state
  state = {
    phone: '',
    message: '',
  }

  // post function to database
  postThing (phone, message) {
    fetch('http://localhost:3000/letter', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
        message: message,
      })
    })
    //update state in the frontend
    .then(this.props.postItem({phone: phone, message: message}));
  }

  // retrieve data from
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div>
        <label htmlFor="phone">Phone
          <input id="phone" type="number" value={this.state.phone} onChange={this.handleChange}></input>
        </label>
        <label htmlFor="message">Message
          <textarea id="message"  value={this.state.message} onChange={this.handleChange}></textarea>
        </label>
        <button onClick={() => this.postThing(this.state.phone, this.state.message)}>Post data</button>
        {/* <button onClick={() => this.getThing()}>Get</button> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postItem: (item) => dispatch(postItem(item))
})

export default connect(null, mapDispatchToProps)(Form);
