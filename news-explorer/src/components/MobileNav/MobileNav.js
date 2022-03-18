import Navigation from "../Navigation/Navigation";

function MobileNav({
  isMobileNavOpen,
  openLoginPopup,
  isLoggedIn,
  handleOpenForm,
  loginState,
  isMobile,
}) {
  return (
    <div
      className={`header__mobile ${
        isMobileNavOpen && "header__mobile_mode_active"
      }`}
    >
      <div className="header__mobile-container">
        <Navigation
          openLoginPopup={openLoginPopup}
          isLoggedIn={isLoggedIn}
          handleOpenForm={handleOpenForm}
          loginState={loginState}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

export default MobileNav;
