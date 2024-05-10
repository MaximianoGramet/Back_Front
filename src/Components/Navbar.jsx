import React from 'react';
import { Link } from 'wouter';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li style={cartLiStyle}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
};

const cartLiStyle = {
  marginLeft: 'auto',
};

export default Navbar;