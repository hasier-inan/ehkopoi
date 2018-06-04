import {compose} from "recompose";
import ReactWindowResizeListener from 'window-resize-listener-react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const React = require('react');

const mapsKey = 'xxx';
const EhGoogleMap = compose(
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    options={{fullscreenControl: false, mapTypeControl: false, streetViewControl: false}}
    defaultCenter={{lat: 43.2627106, lng: -2.3189}}>
    {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}} onClick={props.onMarkerClick}/>}
  </GoogleMap>
)

class EhMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isMarkerShown: false, height: window.innerHeight};
  }

  markerSelected(marker) {
    this.setState({isMarkerShown: false})
    console.log(marker);
  }

  render() {
    return (
      <div>
        <ReactWindowResizeListener onResize={(event) => this.setState({height: window.innerHeight})}/>
        <EhGoogleMap
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.markerSelected}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapsKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `${this.state.height}px`}}/>}
          mapElement={<div style={{height: `100%`}}/>}
        />
      </div>
    )
  }
}
export default EhMap;