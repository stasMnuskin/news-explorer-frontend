import NewsCardList from "../NewsCardList/NewsCardList";
import preloaderImg from "../../images/Ellipse.png";
import notFoundImg from "../../images/not-found_v1.png";

function Preloader({ searchedArticles, isSearching, isLoggedIn }) {
  return (
    <section className="preloader-block">
      {isSearching && (
        <div className="preloader-block_mode_open">
          <img
            className="preloader-block__image preloader-block__image_mode_searching"
            src={preloaderImg}
            alt="preloader"
          ></img>
          <h3 className="preloader-block__text">
            Searching for news...
          </h3>
        </div>
      )}
      {!isSearching ? (
        searchedArticles.length === 0 ? (
          <div className="preloader-block_mode_open">
            <img
              className="preloader-block__image preloader-block__image_mode_not-found"
              src={notFoundImg}
              alt="preloader"
            ></img>
            <h3 className="preloader-block__not-found-title">
              Nothing found
            </h3>
            <span className="preloader-block__text">
              Sorry, but nothing matched your search terms.
            </span>
          </div>
        ) : (
          <NewsCardList isLoggedIn={isLoggedIn} searchedArticles={searchedArticles}></NewsCardList>
        )
      ) : (
        ""
      )}
    </section>
  );
}

export default Preloader;
