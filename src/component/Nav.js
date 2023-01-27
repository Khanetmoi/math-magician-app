import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="flex">
    <h2>Math magicians</h2>
    <nav>
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/Calculator">Calculator</Link>
      <Link className="navLink" to="/Quote">Quote</Link>
    </nav>
  </div>
);

export default Nav;
