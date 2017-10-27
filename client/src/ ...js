import React, { Component } from 'react';
import Item from './item';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  };

  componentDidMount () {
    fetch('http://localhost:3000/letter')
    .then(results => {
      return results.json();
    }).then(data => this.setState({items: data.map(item => {
      console.log(item)
      return item;
    })
    }));
  }




  render() {
    const something = this.state.items.map(item => {
    return (<Item key={item._id} item={item}/>)
    });
    return (
      <div>
        <h3>List name</h3>
        {something}      
      </div>
    );
  }
}

export default List;
