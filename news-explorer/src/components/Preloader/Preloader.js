import NewsCardList from "../NewsCardList/NewsCardList";

function Preloader({
  likedArticles,
  articles,
  isSearching,
  isLoggedIn,
  onSave,
  onDelete,
}) {
  return (
    <section className="preloader-block">
      {isSearching && (
        <div className="preloader-block_mode_open">
          <div className="preloader-block__image preloader-block__image_mode_searching"></div>
          <h3 className="preloader-block__text">Searching for news...</h3>
        </div>
      )}
      {!isSearching ? (
        articles.length === 0 ? (
          <div className="preloader-block_mode_open">
            <div className="preloader-block__image preloader-block__image_mode_not-found"></div>
            <h3 className="preloader-block__not-found-title">Nothing found</h3>
            <span className="preloader-block__text">
              Sorry, but nothing matched your search terms.
            </span>
          </div>
        ) : (
          <NewsCardList
            onDelete={onDelete}
            onSave={onSave}
            isLoggedIn={isLoggedIn}
            articles={articles}
            likedArticles={likedArticles}
          ></NewsCardList>
        )
      ) : (
        ""
      )}
    </section>
  );
}

export default Preloader;
