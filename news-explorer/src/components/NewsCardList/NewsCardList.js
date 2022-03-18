import NewsCard from "../NewsCard/NewsCard";
import { useLocation } from "react-router-dom";
import React from "react";

function NewsCardList({ articles, isLoggedIn, onSave }) {

  const [counter, setCounter] = React.useState(3);
  const [moreArticles, setMoreArticles] = React.useState(true)
  const location = useLocation();

  function handleButton() {
    console.log("articles.length = ", articles.length);
    if ((articles.length - counter) <= 3) {
      setMoreArticles(false);
      setCounter(articles.length)
    } else {
      setCounter(counter + 3)
    }
  }

  return (
    <div
      className={`searched-cards ${
        location.pathname === "/saved-news" && "searched-cards_mode_news"
      }`}
    >
      <div className="searched-cards__container">
        {location.pathname === "/" && (
          <h2 className="searched-cards__title">Search results</h2>
        )}
        <ul className="searched-cards__list">
          {location.pathname === "/"
            ? articles
                .slice(0, counter)
                .map((item, i) => (
                  <NewsCard
                    onSave={onSave}
                    isLoggedIn={isLoggedIn}
                    key={i}
                    _id={item._id}
                    keyword={item.keyword}
                    image={item.urlToImage}
                    date={item.date}
                    title={item.title}
                    text={item.description}
                    source={item.source}
                  ></NewsCard>
                ))
            : articles.map((item, i) => (
                <NewsCard
                  onSave={onSave}
                  isLoggedIn={isLoggedIn}
                  key={i}
                  _id={item._id}
                  keyword={item.keyword}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  text={item.text}
                  source={item.source}
                ></NewsCard>
              ))}
        </ul>
        {location.pathname === "/" && moreArticles && (
          <button
            type="button"
            className="searched-cards__button"
            aria-label="show-more"
            onClick={handleButton}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}

export default NewsCardList;
