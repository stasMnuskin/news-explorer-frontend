import Header from "../Header/Header";
import Main from "../Main/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import newsApi from "../../utils/NewsApi";

function App() {
  //react states
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoggedAndSaved, setIsLoggedAndSaved] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    _id: "",
  });
  const [token, setToken] = React.useState(localStorage.getItem("jwt"));
  const [isServerError, setIsServerError] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [likedArticles, setLikedArticles] = React.useState([]);

  //update headers
  React.useEffect(() => {
    const newToken = localStorage.getItem("jwt");
    mainApi.headers = {
      authorization: `Bearer ${newToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }, [token]);

  //user info
  React.useEffect(() => {
    if (token) {
      mainApi
        .getUserInfo()
        .then((res) => {
          if (res) {
            setCurrentUser({
              name: res.data.name,
              _id: res.data._id,
            });
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  React.useEffect(() => {
    if (localStorage.getItem("keyword")) {
      setKeyword(localStorage.getItem("keyword"));
    }
  }, []);

  //searched articles
  React.useEffect(() => {
    const searchedArticles = localStorage.getItem("articles");
    if (searchedArticles) {
      const parsedArticles = JSON.parse(searchedArticles);
      setArticles(parsedArticles);
    }
  }, []);

  //get liked articles from main api
  React.useEffect(() => {
    if (token) {
      mainApi
        .getArticles()
        .then((res) => {
          if (res) {
            setLikedArticles(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

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

  //set mobile or desktop menu handlers
  React.useEffect(() => {
    window.addEventListener("resize", handleDeviceMenu);

    return () => {
      window.removeEventListener("resize", handleDeviceMenu);
    };
  }, []);

  React.useEffect(() => {
    handleDeviceMenu();
  }, []);

  //handlers
  function handleMobileMenu() {
    setIsMobileNavOpen(true);
  }

  function handleDeviceMenu() {
    if (window.innerWidth > 600) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  function handleHomeClick() {
    setIsLoggedAndSaved(false);
  }

  function handleLogin(values, action) {
    mainApi
      .logIn(values)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.data);
          setToken(localStorage.getItem("jwt"));
          setIsLoggedIn(true);
          setIsServerError(false);
          closeAllPopups();
          action();
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
        setIsServerError(true);
      });
  }

  function handleOpenLoginPopup() {
    closeAllPopups();
    setIsLoginModalOpen(true);
  }

  function handleOpenSignupPopup(values, action) {
    mainApi
      .register(values)
      .then((res) => {
        action();
        setIsSignupModalOpen(false);
        setIsInfoTooltipOpen(true);
        setCurrentUser({ name: res.name, _id: res._id });
        setIsServerError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsServerError(true);
        setCurrentUser({
          name: "",
          _id: "",
        });
      });
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

  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  }

  function handleSearch(key) {
    setIsPreloaderOpen(true);
    setIsSearching(true);
    setKeyword(key);
    newsApi
      .getSearchedArticles(key)
      .then((res) => {
        setArticles(res.articles);
        if (res.articles.length !== 0) {
          localStorage.setItem("articles", JSON.stringify(res.articles));
        } else {
          localStorage.removeItem("articles");
        }
        setIsSearching(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPreloaderOpen(false);
        localStorage.removeItem("articles");
      });
  }

  function handleSaveArticle(article) {
    isLoggedIn
      ? mainApi
          .saveArticle(article, keyword)
          .then((res) => {
            if (res.data) {
              const articleToSave = {
                keyword: res.data.keyword,
                _id: res.data._id,
                title: res.data.title,
                description: res.data.text,
                source: res.data.source.name,
                publishedAt: res.data.date,
                link: res.data.link,
                urlToImage: res.data.image,
              };
              setLikedArticles([...likedArticles, articleToSave]);
            }
          })
          .catch((err) => {
            console.log(err);
          })
      : setIsLoginModalOpen(true);
  }

  function handleDelete(articleId) {
    isLoggedIn
      ? mainApi
          .deleteArticle(articleId)
          .then((res) => {
            setLikedArticles(
              likedArticles.filter((item) => item._id !== articleId)
            );
          })
          .catch((err) => {
            console.log(err);
          })
      : console.log("Cant Delete The Card");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__wrapper">
        <Login
          isServerError={isServerError}
          isInfoTooltipOpen={isInfoTooltipOpen}
          isOpen={isLoginModalOpen}
          onClose={closeAllPopups}
          onSwitch={handleOpenForm}
          onSubmit={handleLogin}
        />
        <Signup
          isServerError={isServerError}
          isSuccess={isInfoTooltipOpen}
          isOpen={isSignupModalOpen}
          onClose={closeAllPopups}
          onSwitch={handleOpenForm}
          onSubmit={handleOpenSignupPopup}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          handleLogin={handleOpenLoginPopup}
        />
        <Header
          currentUser={currentUser}
          onSignOut={handleSignOut}
          isMobile={isMobile}
          deviceChange={handleMobileMenu}
          isMobileNavOpen={isMobileNavOpen}
          isLoggedIn={isLoggedIn}
          onHomeClick={handleHomeClick}
          isLoggedAndSaved={isLoggedAndSaved}
          setIsPreloaderOpen={handleSearch}
          onSearch={handleSearch}
          handleOpenForm={handleOpenForm}
          openLoginPopup={handleOpenLoginPopup}
          openSignupPopup={handleOpenSignupPopup}
          onClose={closeAllPopups}
          onLogin={handleLogin}
          setToken={setToken}
          articles={articles}
          likedArticles={likedArticles}
        ></Header>
        <Switch>
          <ProtectedRoute exact path="/saved-news" isLoggedIn={isLoggedIn}>
            <SavedNews
              isLoggedIn={isLoggedIn}
              articles={articles}
              likedArticles={likedArticles}
              onSave={handleSaveArticle}
              onDelete={handleDelete}
            ></SavedNews>
          </ProtectedRoute>
          <Route path="/">
            <Main
              onDelete={handleDelete}
              onSave={handleSaveArticle}
              isLoggedIn={isLoggedIn}
              isPreloaderOpen={isPreloaderOpen}
              articles={articles}
              likedArticles={likedArticles}
              setIsSearching={setIsSearching}
              isSearching={isSearching}
            ></Main>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
