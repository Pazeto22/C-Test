import React from "react";

import "./styles.scss";
import logo from "../../../assets/logo.svg";
import { ReactComponent as SearchIco } from "../../../assets/ico/search.svg";
import { ReactComponent as UserIco } from "../../../assets/ico/user.svg";
import { ReactComponent as CartIco } from "../../../assets/ico/cart.svg";

export default function Navbar() {
  return (
    <section className="navbar-section">
      <div className="view navbar-wrapper">
        <img
          className="logo-corebiz"
          src={logo}
          alt="logo da empresa corebiz"
        />
        <div className="search-bar">
          <input type="text" className="search-input" />
          <button className="search-button">
            <SearchIco />
          </button>
        </div>
        <div className="user-account">
          <UserIco />
          <span>Minha Conta</span>
        </div>
        <div className="user-cart">
          <CartIco />
          <span>1</span>
        </div>
      </div>
    </section>
  );
}
