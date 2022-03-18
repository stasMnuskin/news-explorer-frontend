import NewsCardList from "../NewsCardList/NewsCardList";
// import preloaderImg from "../../images/elipse.svg";
// import notFoundImg from "../../images/not-found_v1.svg";

function Preloader({ articles, isSearching, isLoggedIn, onSave }) {
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
            onSave={onSave}
            isLoggedIn={isLoggedIn}
            articles={articles}
          ></NewsCardList>
        )
      ) : (
        ""
      )}
    </section>
  );
}

export default Preloader;
