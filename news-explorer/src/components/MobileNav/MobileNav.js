import Navigation from "../Navigation/Navigation";

function MobileNav({isMobileNavOpen, onLogin}) {
  return (
    <div className={`header__mobile ${isMobileNavOpen && "header__mobile_mode_active"}`}>
      <div className="header__mobile-container">
        <Navigation onLogin={onLogin} />
      </div>
    </div>
  )
}

export default MobileNav;