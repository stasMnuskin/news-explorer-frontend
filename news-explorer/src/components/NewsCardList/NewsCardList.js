import NewsCard from "../NewsCard/NewsCard";
import { useLocation } from "react-router-dom";

function NewsCardList({ searchedArticles, isLoggedIn }) {
  const location = useLocation();

  function handleButton() {}

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
            ? searchedArticles
                .slice(0, 3)
                .map((item) => (
                  <NewsCard
                    isLoggedIn={isLoggedIn}
                    key={item._id}
                    _id={item._id}
                    topic={item.topic}
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    text={item.text}
                    source={item.source}
                  ></NewsCard>
                ))
            : searchedArticles.map((item) => (
                <NewsCard
                  isLoggedIn={isLoggedIn}
                  key={item._id}
                  _id={item._id}
                  topic={item.topic}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  text={item.text}
                  source={item.source}
                ></NewsCard>
              ))}
        </ul>
        {location.pathname === "/" && (
          <button
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
