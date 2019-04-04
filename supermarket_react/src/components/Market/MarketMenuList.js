import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class MarketMenuList extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Category
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Frozen goods</MenuItem>
          <MenuItem onClick={this.handleClose}>Stationery</MenuItem>
          <MenuItem onClick={this.handleClose}>Bakery</MenuItem>
          <MenuItem onClick={this.handleClose}>Fruits and vegetables</MenuItem>
          <MenuItem onClick={this.handleClose}>Meet</MenuItem>
          <MenuItem onClick={this.handleClose}>Dairy products</MenuItem>

        </Menu>
      </div>
    );
  }
}

export default MarketMenuList;