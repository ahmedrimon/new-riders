import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 23.4607,
      lng: -91.1809
    },
    zoom: 8
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '400px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDG8_l5uL96DE57vzJ8mLRrPGSbkrc-Sq0"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.4607}
            lng={-91.1809}
            text="Cumilla"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;