import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    this.props.updateCoords(event.target.dataset);
    event.target.classList.add('selected');
  }

  render() {
    return (
      <div className="card" style ={ { backgroundImage: `url(${this.props.flat.imageUrl})` } }>
        <div className="card-category">{`${this.props.flat.price} ${this.props.flat.priceCurrency}`}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" data-lat={`${this.props.flat.lat}`} data-lng={`${this.props.flat.lng}`} onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
