import React, { Component } from 'react';
import Flat from './flat.jsx'

class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = { activeFlat: "" };
  }

  setActiveFlat = (eventTarget) => {
    if (eventTarget !== this.state.activeFlat) {
      if (this.state.activeFlat !== "") {
        this.state.activeFlat.classList.remove('selected');
      }
      eventTarget.classList.add('selected');
      this.setState({ activeFlat: eventTarget });
    }
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.data.map( flat => <Flat flat={flat} key={flat.name} updateCoords={this.props.updateCoords} setActiveFlat={this.setActiveFlat}/>)}
      </div>
    );
  }
}

export default FlatList;
