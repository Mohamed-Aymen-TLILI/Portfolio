import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/film">Films</a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/Portfolio/film" className="nav-link" activeClassName="active" > Films </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Portfolio/favoris" className="nav-link" activeClassName="active"> Favoris </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }

}
