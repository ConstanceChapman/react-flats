import React, { Component } from 'react';
import FlatList from './flat_list.jsx'
import flats from '../../data/flats.js'
import SimpleMap from './simple_map.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLat: 48.884211,
      selectedFlatLng: 2.34689
    }
  }

  updateCoords = (flat) => {
    this.setState({
      selectedFlatLat: flat.lat,
      selectedFlatLng: flat.lng
    });
  }

  render() {
    return (
      <div>
        <FlatList data={flats} updateCoords={this.updateCoords}/>
        <SimpleMap lat={this.state.selectedFlatLat} lng={this.state.selectedFlatLng} />
      </div>
    );
  }
}

  export default App;


