import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ isLoggedIn, articles }) {
  return (
    <>
      <NewsCardList
        isLoggedIn={isLoggedIn}
        articles={articles}
      ></NewsCardList>
    </>
  );
}

export default SavedNews;
