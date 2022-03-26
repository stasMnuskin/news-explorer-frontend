import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import { useLocation } from "react-router-dom";

function Main({
  onDelete,
  onSave,
  isPreloaderOpen,
  articles,
  setIsSearching,
  isSearching,
  isLoggedIn,
  likedArticles
}) {
  const location = useLocation();

  return (
    <>
      {isPreloaderOpen && (
        <Preloader
          onDelete={onDelete}
          onSave={onSave}
          articles={articles}
          likedArticles={likedArticles}
          setIsSearching={setIsSearching}
          isSearching={isSearching}
          isLoggedIn={isLoggedIn}
        />
      )}
      {location.pathname === "/" && <About></About>}
    </>
  );
}

export default Main;
