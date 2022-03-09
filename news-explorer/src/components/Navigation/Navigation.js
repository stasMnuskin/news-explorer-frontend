import { Link, useLocation, useHistory } from "react-router-dom";
import logoutWhiteImg from "../../images/white-logout.svg";
import logoutBlackImg from "../../images/Union.svg";
import React from "react";

function Navigation({
  isLoggedIn,
  handleOpenForm,
  loginState,
  isMobile,
  isMobileNavOpen,
}) {
  const location = useLocation();
  const history = useHistory();

  function handleClick() {
    if (!isLoggedIn) {
      handleOpenForm();
    } else {
      history.push("/");
      loginState(false);
    }
  }
  return (
    <div
      className={`header__navigation-block-container ${
        !isLoggedIn ? "header__navigation-block-container_mode_logged-out" : ""
      } `}
    >
      <Link
        to="/"
        className={`header__home-link ${
          location.pathname === "/saved-news"
            ? "header__home-link_mode_news"
            : "header__home-link_mode_home"
        } ${
          isLoggedIn
            ? "header__home-link_loggedIn"
            : "header__home-link_mode_loggedOut"
        }`}
      >
        Home
      </Link>
      {isLoggedIn && (
        <div className="header__nav-list-item">
          <Link
            to="/saved-news"
            className={`header__nav-link ${
              location.pathname === "/saved-news"
                ? "header__nav-link_mode_news"
                : ""
            }`}
          >
            Saved articles
          </Link>
        </div>
      )}
      <div
        className={`header__log-button__container ${
          isMobileNavOpen ? "header__log-button__container-mobile" : ""
        }`}
      >
        <button
          onClick={handleClick}
          className={`header__log-button ${
            location.pathname === "/saved-news"
              ? "header__log-button_mode_news"
              : ""
          } ${
            isLoggedIn
              ? "header__log-button_mode_loggedIn"
              : "header__log-button_mode_loggedOut"
          }`}
        >
          {isLoggedIn ? "User" : "Sign in"}
          {isLoggedIn && (
            <img
              className="header__logout-img"
              src={location.pathname === "/" ? logoutWhiteImg : logoutBlackImg}
              alt="logout"
            ></img>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navigation;
