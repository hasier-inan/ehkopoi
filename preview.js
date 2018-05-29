/* global window */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import EhkoPoiPreview from './src/main/js/preview';

const Preview = () =>
  <div>
    <EhkoPoiPreview />
  </div>;

ReactDOM.render(React.createElement(Preview), window.container);
