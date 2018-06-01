import 'bootstrap';
import 'jquery';
import EhMap from "./components/eh-map";
import MenuDefinition from "./components/menu-definition";

require("../sass/styles.scss");

const React = require('react');
const ReactDOM = require('react-dom');

class EhkoPoi extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuDefinition/>
        <EhMap />
      </div>
    )
  }
}
export default EhkoPoi;