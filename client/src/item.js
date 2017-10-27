import React, { Component } from 'react';

class Item extends Component {

  deleteItem (id) {
    console.log(id);
    fetch('http://localhost:3000/remove-letter', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      })
    })
  }

  render() {
    return (
      <ul key={this.props.item._id}>
        <li>{this.props.item.phone}</li>
        <li>{this.props.item.message}</li>
        <li><button onClick={() => this.deleteItem(this.props.item)}>Delete Item</button></li>
      </ul>
    );
  }
}

export default Item;
