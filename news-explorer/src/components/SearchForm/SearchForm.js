function SearchForm({setIsPreloaderOpen}) {

  function handleSubmit(e) {
    e.preventDefault();
    // stage-3 code
  };

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
            className="search-form__input"
            placeholder="Enter topic"
            type="text"
            required
          ></input>
          <button className="search-form__button" type="button" onClick={setIsPreloaderOpen} >Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
