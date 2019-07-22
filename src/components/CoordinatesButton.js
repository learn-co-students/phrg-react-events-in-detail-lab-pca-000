import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  coordinatesEvent = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

   render() {
    return (
      <button onClick={this.coordinatesEvent}></button>
    );
  }
}
