import React from "react";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";
import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  onSearch,
  currentUser,
  onSignOut,
  setToken,
  isLoggedIn,
  onHomeClick,
  isLoggedAndSaved,
  loginState,
  setIsPreloaderOpen,
  openLoginPopup,
  openSignupPopup,
  handleOpenForm,
  isMobile,
  deviceChange,
  isMobileNavOpen,
  onClose,
  onLogin,
  articles,
}) {
  const location = useLocation();

  return (
    <>
      <header
        className={location.pathname === "/" ? "header" : "header_mode_news"}
      >
        <div className="header__navigation">
          <Link
            to="/"
            onClick={onHomeClick}
            className={`header__btn-txt ${
              location.pathname === "/saved-news"
                ? `header__btn-txt_mode_news${isMobileNavOpen ? "-mobile" : ""}`
                : ""
            }`}
          >
            NewsExplorer
          </Link>
          {isMobile ? (
            <button
              type="button"
              aria-label="mobile-button"
              className={`header__mobile-menu ${
                isMobileNavOpen
                  ? "header__mobile-menu_mode_open"
                  : location.pathname === "/saved-news" &&
                    "header__mobile-menu_mode_news"
              }`}
              onClick={isMobileNavOpen ? onClose : deviceChange}
            />
          ) : (
            <Navigation
              currentUser={currentUser}
              onSignOut={onSignOut}
              setToken={setToken}
              onLogin={onLogin}
              isMobileNavOpen={isMobileNavOpen}
              isLoggedIn={isLoggedIn}
              isLoggedAndSaved={isLoggedAndSaved}
              loginState={loginState}
              openLoginPopup={openLoginPopup}
              openSignupPopup={openSignupPopup}
              handleOpenForm={handleOpenForm}
              isMobile={isMobile}
            ></Navigation>
          )}
        </div>
        <MobileNav
          handleOpenForm={handleOpenForm}
          isMobileNavOpen={isMobileNavOpen}
          openLoginPopup={openLoginPopup}
        />
        {location.pathname === "/" && (
          <SearchForm
            setIsPreloaderOpen={setIsPreloaderOpen}
            onSearch={onSearch}
          />
        )}
        {location.pathname === "/saved-news" && (
          <SavedNewsHeader currentUser={currentUser} articles={articles} />
        )}
      </header>
    </>
  );
}

export default Header;
