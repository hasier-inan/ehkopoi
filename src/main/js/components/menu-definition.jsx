import {slide as BurguerMenu} from 'react-burger-menu'
import PropTypes from 'prop-types';

const React = require('react');

class MenuDefinition extends React.Component {

  showSettings(event) {
    event.preventDefault();
  }

  getItems() {
    return this.props.items.map((value, index) => {
      return <div
        key={index}
        onClick={() => value.onSelect()}
        className="menu-item ml-4 mt-2">{value.key}</div>
    });
  }

  render() {
    return (
      <BurguerMenu isOpen={this.props.isOpen}>
        {this.getItems()}
      </BurguerMenu>
    )
  }
}

MenuDefinition.propTypes = {
  items: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default MenuDefinition;