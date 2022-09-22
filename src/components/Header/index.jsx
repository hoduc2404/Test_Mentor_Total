import React from 'react';
import './styles.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <a href="/home">
            <img src={require('../../img/image3.png')} alt="" />
          </a>
        </div>
        <div className="login-register">
          <i className="fa-solid fa-cart-shopping">(1)</i>
          <a href="#">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
      <div className="header-bottom">
        <nav>
          <a className="home" href="/home">
            Home
          </a>
          <a href="#">Men</a>
          <a href="#">Woman</a>
          <a href="#">Kid</a>
          <a href="#">Sport</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
