import 'bootstrap';
import 'jquery';
import EhMap from "./components/eh-map";
import MenuDefinition from "./components/menu-definition";
import accommodation from './data/alojamientos.json';
import campings from './data/campings.json';
import culture from './data/patrimonios.json';
import beaches from './data/playas.json';
import restaurants from './data/restaurantes.json';


require("../sass/styles.scss");

const React = require('react');

class EhkoPoi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      items: [
        {
          key: 'Alojamientos',
          onSelect: () => {
            this.setState({data: accommodation, isOpen:false})
          }
        },
        {
          key: 'Campings',
          onSelect: () => {
            this.setState({data: campings, isOpen:false})
          }
        },
        {
          key: 'Restaurantes',
          onSelect: () => {
            this.setState({data: restaurants, isOpen:false})
          }
        },
        {
          key: 'Patrimonios culturales',
          onSelect: () => {
            this.setState({data: culture, isOpen:false})
          }
        },
        {
          key: 'Playas',
          onSelect: () => {
            this.setState({data: beaches, isOpen:false})
          }
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <MenuDefinition items={this.state.items} isOpen={false}/>
        <EhMap data={this.state.data}/>
      </div>
    )
  }
}
export default EhkoPoi;