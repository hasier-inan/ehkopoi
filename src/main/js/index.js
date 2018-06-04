import 'bootstrap';
import 'jquery';
import EhMap from "./components/eh-map";
import MenuDefinition from "./components/menu-definition";

require("../sass/styles.scss");

const React = require('react');

class EhkoPoi extends React.Component {

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