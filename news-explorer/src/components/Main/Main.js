import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import { useLocation } from "react-router-dom";

function Main({
  isPreloaderOpen,
  searchedArticles,
  setIsSearching,
  isSearching,
  isLoggedIn,
}) {
  const location = useLocation();

  return (
    <>
      {isPreloaderOpen && (
        <Preloader
          searchedArticles={searchedArticles}
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
