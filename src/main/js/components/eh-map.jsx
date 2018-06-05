import {compose} from "recompose";
import ReactWindowResizeListener from 'window-resize-listener-react';
import PropTypes from 'prop-types';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const React = require('react');

//TODO: add gitcrypt
const mapsKey = 'xxx';

const EhGoogleMap = compose(
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    options={{fullscreenControl: false, mapTypeControl: false, streetViewControl: false}}
    defaultCenter={{lat: 43.2627106, lng: -2.3189}}>
    {props.buildMarkers()}
  </GoogleMap>
);

class EhMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {height: window.innerHeight};
  }

  markerSelected(marker) {
    //TODO: Add listener to display info
  }

  buildMarkers() {
    return this.props.data.map((element, index)=>{
      return <Marker key={index} position={{lat: parseFloat(element.latwgs84), lng: parseFloat(element.lonwgs84)}} onClick={(marker) => this.markerSelected()}/>
    });
  }

  render() {
    return (
      <div>
        <ReactWindowResizeListener onResize={(event) => this.setState({height: window.innerHeight})}/>
        <EhGoogleMap
          onMarkerClick={this.markerSelected}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapsKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `${this.state.height}px`}}/>}
          mapElement={<div style={{height: `100%`}}/>}
          buildMarkers={() => this.buildMarkers()}
        />
      </div>
    )
  }
}
EhMap.propTypes = {
  data: PropTypes.array.isRequired
};
export default EhMap;