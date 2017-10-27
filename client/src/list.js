import React, { Component } from 'react';
import Item from './item';
import { connect } from 'react-redux';

import { listItems } from './actions';

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    }
    this.fetchItems();
    console.log(this.props)
  };

  fetchItems () {
    fetch('http://localhost:3000/letter')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.props.funzione(data);
      return data
    });
  };




  render() {
    const something = this.props.stateToItems.map(item => {
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

const mapStateToProps = (state) => ({
  stateToItems: state.items
})

const mapDispatchToProps = (dispatch) => ({
  funzione: (items) => dispatch(listItems(items))
})



export default connect(mapStateToProps, mapDispatchToProps)(List);
