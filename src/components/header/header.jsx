import React from 'react';

const Header = () => (
  <header className="header">
    <a href="#">
      <img src="img/news-logo.png" alt="logo" className="logo" />
    </a>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#sport-news">Sport</a></li>
        <li><a href="#travel-news">Travel</a></li>
        <li><a href="#future-news">Future</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
