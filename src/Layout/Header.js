import React, { useState, useRef, useEffect } from 'react'
import {PATH_NAME} from 'Constants/Config';
import {  useDispatch } from 'react-redux'
import {logoutUser} from 'Actions/Auth'
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Header(props) {
  const history = useHistory()
  const dispatch = useDispatch()
 
  const _handleLogout = () => {
    dispatch(logoutUser());
    history.push(PATH_NAME.LOGIN);
  };
  return (
    <header className="header">
      <div className="header-top container">
        <Link to={PATH_NAME.HOME} className="logo">
          <img
            src="./image/—Pngtree—wolf mascot esport logo_5901918.png"
            alt=""
          />
          <span>animal</span>
        </Link>
        <input type="checkbox" hidden name="search-box" id="search-box" />
        <label htmlFor="search-box" className="lb-search-icon"></label>
        <div className="search">
          <form className="search-form" action>
            <input type="checkbox" hidden name="search-icon" id />
            <input
              className="search-inp"
              type="text"
              placeholder="Nhập từ khóa cần tìm..."
            />
            <button className="search-btn" type="submit">
              <svg
                width={28}
                height={28}
                className="_35lll _3FpBp _24pSQ"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="utils">
          <button onClick={_handleLogout} className="btn-logout">
            <i className="fas fa-sign-out-alt" />
            <span>Logout</span>
          </button>
          <label className="bar-icon" htmlFor="menu-show">
            <i className="fas fa-bars" />
          </label>
          <input
            type="checkbox"
            name="menu-show"
            hidden
            className="menu-show-height"
            id="menu-show"
          />
          <label htmlFor="menu-show" className="menu-placeholder">
            {' '}
          </label>
          <div className="menu-mobile">
            <div className="menu-content">
              <div className="menu-heading">
                Menu
                <label htmlFor="menu-show" className="close-icon">
                  ×
                </label>
              </div>
              <ul className="menu-list">
                <li className="menu-item">
                  <a className="menu-link" href="http://">
                    <i className="fas fa-home" />
                    <span>Home</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="http://">
                    <i className="fas fa-id-badge" />
                    <span>About Us</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link">
                    <i className="fas fa-sign-out-alt" />
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
