import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>NBA 2022-2023 Season Highlights</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
