import { useState } from 'react';

const SearchBar = (props) => {
  const [inputTerm, setInputTerm] = useState('');

  const changeInputHandler = (event) => {
    setInputTerm(event.target.value);

    props.onInputSubmit(event.target.value.trim());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onInputSubmit(inputTerm.trim());
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="max-w-sm w-full rounded-xl m-auto flex bg-white shadow-md focus-within:ring-2 focus-within:ring-green-400">
        <input
          type="text"
          className="w-full outline-none rounded-tl-xl rounded-bl-xl pl-4 py-3 font-medium"
          placeholder="Search images..."
          value={inputTerm}
          onChange={changeInputHandler}
        />
        <button className="bg-transparent w-16 text-green-400 rounded-tr-xl rounded-br-xl focus:outline-none">
          <i className="fas fa-search text-lg"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
