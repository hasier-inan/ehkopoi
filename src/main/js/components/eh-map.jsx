import {compose} from "recompose";
import ReactWindowResizeListener from 'window-resize-listener-react';
import PropTypes from 'prop-types';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const React = require('react');

const mapsKey = 'AIzaSyDB7dACNMwk75dB_XYPDFHh_SF0n8ZRPjs';

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
    this.state = {height: window.innerHeight, infoBox: {}};
  }

  markerSelected(key) {
    this.setState({
      infoBox: {isOpen: true, index: key}
    });
  }

  buildMarkers() {
    return this.props.data.map((element, index) => {
      return <Marker key={index}
                     icon={this.props.icon}
                     position={{lat: parseFloat(element.latwgs84), lng: parseFloat(element.lonwgs84)}}
                     onClick={() => this.markerSelected(index)}>
        {
          this.state.infoBox.isOpen && this.state.infoBox.index === index &&
          <InfoWindow onCloseClick={() => console.log('close me')}>
            <div className="text-center w-100">{element.documentName}
              <div className="w-50 d-inline-block">
                <object data={this.props.icon} type="image/svg+xml">
                </object>
              </div>
              <div className="w-50 d-inline-block">tbd</div>
            </div>
          </InfoWindow>
        }
      </Marker>
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
  data: PropTypes.array.isRequired,
  icon: PropTypes.string
};
export default EhMap;