import 'bootstrap';
import 'jquery';
import EhMap from "./components/eh-map";
import MenuDefinition from "./components/menu-definition";
import accommodation from './data/alojamientos.json';
import accommodationIco from './data/alojamientos.svg';
import campings from './data/campings.json';
import campingsIco from './data/campings.svg';
import culture from './data/patrimonios.json';
import cultureIco from './data/patrimonios.svg';
import beaches from './data/playas.json';
import beachesIco from './data/playas.svg';
import restaurants from './data/restaurantes.json';
import restaurantsIco from './data/restaurantes.svg';


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
            this.setState({data: accommodation, isOpen: false, icon: accommodationIco})
          }
        },
        {
          key: 'Campings',
          onSelect: () => {
            this.setState({data: campings, isOpen: false, icon: campingsIco})
          }
        },
        {
          key: 'Restaurantes',
          onSelect: () => {
            this.setState({data: restaurants, isOpen: false, icon: restaurantsIco})
          }
        },
        {
          key: 'Patrimonios culturales',
          onSelect: () => {
            this.setState({data: culture, isOpen: false, icon: cultureIco})
          }
        },
        {
          key: 'Playas',
          onSelect: () => {
            this.setState({data: beaches, isOpen: false, icon: beachesIco})
          }
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <MenuDefinition items={this.state.items} isOpen={false}/>
        <EhMap data={this.state.data} icon={this.state.icon}/>
      </div>
    )
  }
}
export default EhkoPoi;