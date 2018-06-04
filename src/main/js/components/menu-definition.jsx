import { slide as BurguerMenu } from 'react-burger-menu'

const React = require('react');

class MenuDefinition extends React.Component {

  showSettings (event) {
    event.preventDefault();

  }

  render() {
    return (
      <BurguerMenu>
        <div className="menu-item ml-4 mt-2" >Jatetxeak</div>
        <div className="menu-item ml-4 mt-2" >Ikuskizunak</div>
        <div className="menu-item ml-4 mt-2" >Mendiak</div>
        <div className="menu-item ml-4 mt-2" >Hotelak</div>
      </BurguerMenu>
    )
  }
}
export default MenuDefinition;