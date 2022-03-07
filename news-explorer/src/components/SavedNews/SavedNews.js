import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ isLoggedIn, searchedArticles }) {
  return (
    <>
      <NewsCardList
        isLoggedIn={isLoggedIn}
        searchedArticles={searchedArticles}
      ></NewsCardList>
    </>
  );
}

export default SavedNews;
