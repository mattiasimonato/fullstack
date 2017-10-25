import React, { Component } from 'react';
import Item from './item';

class List extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //   }
  // };
  //
  // componentDidMount () {
  //   fetch('https://movied.herokuapp.com/discover')
  //   .then(results => {
  //     return results.json();
  //   }).then(data => this.setState({items: data.map(movie => {
  //     item.poster_path = 'https://image.tmdb.org/t/p/w300'.concat(item.poster_path)
  //     return item;
  //   })
  //   }));
  // }


  render() {
    return (
      <div>
        <h3>List name</h3>
        <Item />
      </div>
    );
  }
}

export default List;
