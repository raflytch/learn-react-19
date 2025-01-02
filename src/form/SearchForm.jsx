const SearchForm = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert("You Clicked Search");
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
