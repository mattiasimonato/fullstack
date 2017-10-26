import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <ul key={this.props.item._id}>
        <li>{this.props.item.phone}</li>
        <li>{this.props.item.message}</li>
      </ul>
    );
  }
}

export default Item;
