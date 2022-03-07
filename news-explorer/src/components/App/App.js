import Header from "../Header/Header";
import Main from "../Main/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";
import searchedArticles from "../../data/articles";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  //react states
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isLoggedAndSaved, setIsLoggedAndSaved] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  //closing handlers
  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  React.useEffect(() => {
    const closeByClick = (e) => {
      if (e.target.classList.contains("modal")) {
        closeAllPopups();
      }
    };

    document.addEventListener("click", closeByClick);

    return () => document.removeEventListener("click", closeByClick);
  }, []);

  React.useEffect(() => {
    handleDeviceMenu();
  }, []);

  React.useEffect(() => {
    document.addEventListener("resize", handleDeviceMenu);

    return () => document.removeEventListener("resize", handleDeviceMenu);
  }, []);

  //handlers
  function handleMobileMenu() {
    setIsMobileNavOpen(true);
  }

  function handleDeviceMenu() {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  function handleSearch() {
    setIsPreloaderOpen(true);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      // setIsPreloaderOpen(true);
    }, 3000);
  }

  function handleLoginState() {
    setIsLoggedIn((loggedIn) => !loggedIn);
  }

  function handleHomeClick() {
    setIsLoggedAndSaved(false);
  }

  function handleLogin() {
    setIsLoggedIn(true);
    closeAllPopups();
  }

  function handleSuccessSignup() {
    setIsSignupModalOpen(false);
    setIsInfoTooltipOpen(true);
  }

  function handleOpenLoginPopup() {
    setIsLoginModalOpen(true);
    setIsInfoTooltipOpen(false);
  }
  function handleOpenSignupPopup() {
    setIsSignupModalOpen(true);
  }

  function handleOpenForm() {
    if (isLoginModalOpen) {
      setIsLoginModalOpen(false);
      setIsSignupModalOpen(true);
    } else if (isSignupModalOpen) {
      setIsSignupModalOpen(false);
      setIsLoginModalOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  }

  function closeAllPopups() {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
    setIsInfoTooltipOpen(false);
    setIsMobileNavOpen(false);
  }

  return (
    <div className="page__wrapper">
      <Login
        isOpen={isLoginModalOpen}
        onLogin={handleLogin}
        onClose={closeAllPopups}
        onSwitch={handleOpenForm}
      />
      <Signup
        isOpen={isSignupModalOpen}
        onClose={closeAllPopups}
        onSwitch={handleOpenForm}
        onSignup={handleOpenSignupPopup}
        onLogin={handleSuccessSignup}
      />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        handleOpenLoginPopup={handleOpenLoginPopup}
      />
      <Header
        isMobile={isMobile}
        deviceChange={handleMobileMenu}
        isMobileNavOpen={isMobileNavOpen}
        loginState={handleLoginState}
        isLoggedIn={isLoggedIn}
        onHomeClick={handleHomeClick}
        isLoggedAndSaved={isLoggedAndSaved}
        setIsPreloaderOpen={handleSearch}
        isSearching={handleSearch}
        handleOpenForm={handleOpenForm}
        openLoginPopup={handleOpenLoginPopup}
        openSignupPopup={handleOpenSignupPopup}
        onClose={closeAllPopups}
        onLogin={handleLogin}
      ></Header>
      <Switch>
        <Route path="/saved-news">
          <SavedNews
            isLoggedIn={isLoggedIn}
            searchedArticles={searchedArticles}
          ></SavedNews>
        </Route>
        <Route path="/">
          <Main
            isLoggedIn={isLoggedIn}
            isPreloaderOpen={isPreloaderOpen}
            searchedArticles={searchedArticles}
            setIsSearching={setIsSearching}
            isSearching={isSearching}
          ></Main>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
