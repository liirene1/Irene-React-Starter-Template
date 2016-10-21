import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar-fixed-top menu-bar">
        <Link to="/" className="navbar-left float_left">
          LOGO
        </Link>
      </div>
    );
  }
}

export default Navbar;
