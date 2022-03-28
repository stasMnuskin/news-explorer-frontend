import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ onDelete, onSave, isLoggedIn, articles, likedArticles }) {
  return (
    <NewsCardList
      onDelete={onDelete}
      likedArticles={likedArticles}
      isLoggedIn={isLoggedIn}
      onSave={onSave}
    ></NewsCardList>
  );
}

export default SavedNews;
