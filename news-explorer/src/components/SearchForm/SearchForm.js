import React from "react";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(keyword);
  }

  function handleChange(evt) {
    // console.log("evt.target.value = ", evt.target.value);
    // const e = evt.currentTarget;
    // const r1 = e.closest("search-form__input");

    // console.log("r1 = ", r1);
    setKeyword(evt.target.value);
  }

  return (
    <div className="search-block">
      <div className="search-block__container">
        <h1 className="search-block__title">What's going on in the world?</h1>
        <h3 className="search-block__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </h3>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            value={keyword}
            onChange={handleChange}
            className="search-form__input"
            placeholder="Enter topic"
            type="text"
            required
          ></input>
          <button
            // onClick={setIsPreloaderOpen}
            className="search-form__button"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
