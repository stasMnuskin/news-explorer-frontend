// import articles from "../../data/articles";

function SavedNewsHeader({currentUser, articles}) {
  return (
    <section className="saved-news-header">
      <span className="saved-news-header__description">Saved articles</span>
      <h1 className="saved-news-header__title">
        {currentUser.name}, you have {articles.length} saved articles
      </h1>
      <p className="saved-news-header__text">
        By keywords:
        <span className="saved-news-header__keywords">
          {" "}
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
