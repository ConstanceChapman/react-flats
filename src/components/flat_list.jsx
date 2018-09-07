import React, { Component } from 'react';
import Flat from './flat.jsx'

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {this.props.data.map( flat => <Flat flat={flat} key={flat.name} updateCoords={this.props.updateCoords}/>)}
      </div>
    );
  }
}

export default FlatList;
