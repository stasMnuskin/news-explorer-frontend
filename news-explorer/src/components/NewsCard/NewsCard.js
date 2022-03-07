import React from "react";
import { useLocation } from "react-router-dom";

function NewsCard({
  isLoggedIn,
  _id,
  topic,
  image,
  date,
  title,
  text,
  source,
}) {
  const location = useLocation();
  const [isSaved, setIsSaved] = React.useState(false);

  function handleClick() {
    if (isLoggedIn) {
      setIsSaved((saved) => !saved);
    }
  }

  return (
    <li className="news-card">
      <div className="news-card__container">
        <button
          aria-label="save"
          type="button"
          onClick={handleClick}
          className={`news-card__button ${
            location.pathname === "/"
              ? (isLoggedIn && isSaved) ? "news-card__button_mode_save-loggedIn" : "news-card__button_mode_save"
              : "news-card__button_mode_news"
          }`}
        ></button>
        {!isLoggedIn && (
          <span className="news-card__hover-text">
            {location.pathname === "/" ? "Sign in to save articles" : "Remove from saved"}
          </span>
        )}
        {location.pathname === "/saved-news" && <span className="news-card__topic">{topic}</span>}
        <img className="news-card__image" src={image} alt={title}></img>
        <div className="news-card__info">
          <span className="news-card__date">{date}</span>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__text">{text}</p>
          <span className="news-card__source">{source}</span>
        </div>
      </div>
    </li>
  );
}
export default NewsCard;
