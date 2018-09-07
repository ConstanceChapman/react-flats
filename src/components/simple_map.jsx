import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({text}) => <div className="marker"></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.80,
      lng: 2.30
    },
    zoom: 11
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA1bI1WJ_-V9V_6XY3GFbFysM1ehffKpnA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
