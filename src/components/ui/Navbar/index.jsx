import React from "react";
import "./styles.scss";

import logo from "assets/logo.svg";
import { ReactComponent as Hmenu } from "assets/ico/hmenu.svg";
import { ReactComponent as SearchIco } from "assets/ico/search.svg";
import { ReactComponent as UserIco } from "assets/ico/user.svg";
import { ReactComponent as CartIco } from "assets/ico/cart.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="view navbar-wrapper">
        <div className="mobile-menu">
          <Hmenu />
        </div>
        <div className="navbar-logo">
          <img
            className="logo-corebiz"
            src={logo}
            alt="logo da empresa corebiz"
          />
        </div>
        <form className="search-bar">
          <input
            type="search"
            className="search-input"
            placeholder="O que está procurando?"
          />
          <button type="submit" className="search-button">
            <SearchIco />
          </button>
        </form>
        <div className="user-account">
          <UserIco />
          <span>Minha Conta</span>
        </div>
        <div className="user-cart">
          <CartIco />
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
