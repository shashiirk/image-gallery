const SearchBar = () => {
  return (
    <form>
      <div className="max-w-sm w-full rounded-xl m-auto flex bg-white shadow">
        <input
          type="text"
          className="w-full outline-none rounded-tl-xl rounded-bl-xl p-3 font-medium"
          placeholder="Search images..."
        />
        <button className="w-12 text-green-400 outline-none bg-transparent">
          <i className="fas fa-search text-lg"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
