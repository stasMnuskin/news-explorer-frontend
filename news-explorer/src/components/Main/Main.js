import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import { useLocation } from "react-router-dom";

function Main({
  onSave,
  isPreloaderOpen,
  articles,
  setIsSearching,
  isSearching,
  isLoggedIn,
}) {
  const location = useLocation();

  return (
    <>
      {isPreloaderOpen && (
        <Preloader
          onSave={onSave}
          articles={articles}
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
