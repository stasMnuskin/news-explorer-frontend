/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useLocation } from "react-router-dom";

function NewsCard({
  onDelete,
  onSave,
  isLoggedIn,
  searchedArticle,
  articles,
  likedArticles,
}) {
  const location = useLocation();

  const { title, url = searchedArticle.link } = searchedArticle;

  let isSaved = false;

  function handleClick() {
    if (isSaved) {
      onDelete(searchedArticle._id);
      isSaved = false;
    } else {
      onSave(searchedArticle);
    }
  }
  function saveArticle() {
    onSave(searchedArticle);
  }

  function deleteArticle() {
    onDelete(searchedArticle._id);
  }

  if (likedArticles.length > 0) {
    likedArticles.find((article) => {
      if (article.title === searchedArticle.title) {
        searchedArticle._id = article._id;
        isSaved = true;
      }
      return isSaved;
    });
  }

  return (
    <li className="news-card">
      <div className="news-card__container">
        <button
          aria-label="save"
          type="button"
          onClick={
            isLoggedIn
              ? location.pathname === "/"
                ? handleClick
                : deleteArticle
              : saveArticle
          }
          className={`news-card__button ${
            location.pathname === "/" && !isSaved
              ? "news-card__button_mode_save"
              : location.pathname === "/" && isSaved
              ? "news-card__button_mode_save-loggedIn"
              : "news-card__button_mode_news"
          }`}
        ></button>
        {!isLoggedIn && (
          <span className="news-card__hover-text">
            {location.pathname === "/"
              ? "Sign in to save articles"
              : "Remove from saved"}
          </span>
        )}
        {location.pathname === "/saved-news" && (
          <span className="news-card__topic">{searchedArticle.keyword}</span>
        )}
        <a
          className="news-card__url"
          href={
            location.pathname === "/saved-news" ? searchedArticle.link : url
          }
          target="_blank"
        >
          <img
            className="news-card__image"
            src={searchedArticle.image || searchedArticle.urlToImage}
            alt={title}
          ></img>
          <div className="news-card__info">
            <span className="news-card__date">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <h3 className="news-card__title">{title}</h3>
            <p className="news-card__text">
              {searchedArticle.text || searchedArticle.description}
            </p>
            <span className="news-card__source">
              {location.pathname === "/saved-news"
                ? searchedArticle.source
                : searchedArticle.source.name}
            </span>
          </div>
        </a>
      </div>
    </li>
  );
}
export default NewsCard;
