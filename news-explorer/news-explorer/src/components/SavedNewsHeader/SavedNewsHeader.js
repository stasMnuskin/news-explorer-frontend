// import articles from "../../data/articles";

function SavedNewsHeader({ currentUser, articles, likedArticles }) {

  const savedArticles = likedArticles.filter(
    (item) => item.owner === currentUser._id
  );
  const words = savedArticles.map((item) => item.keyword);
  const wordsSet = [...new Set([...words])];

  return (
    <section className="saved-news-header">
      <span className="saved-news-header__description">Saved articles</span>
      <h1 className="saved-news-header__title">
        {currentUser.name}, you have {likedArticles.length} saved articles
      </h1>
      <p className="saved-news-header__text">
        By keywords:
        <span className="saved-news-header__keywords">
          {wordsSet.length > 3
            ? `${wordsSet[0]}, ${wordsSet[1]}, and
          ${wordsSet.length - 2} other`
            : `${wordsSet.slice(0, wordsSet.length).map((item) => ` ${item}`)}`}
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
