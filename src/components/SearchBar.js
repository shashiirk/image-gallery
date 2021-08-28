import { useState } from 'react';

const SearchBar = (props) => {
  const [inputTerm, setInputTerm] = useState('');

  const changeInputHandler = (event) => {
    setInputTerm(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onInputSubmit(inputTerm.trim());
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="max-w-md w-full rounded-lg m-auto flex bg-white shadow">
        <input
          type="text"
          className="w-full outline-none rounded-tl-xl rounded-bl-xl pl-4 py-3"
          placeholder="Search images..."
          value={inputTerm}
          onChange={changeInputHandler}
        />
        <button className="bg-transparent text-indigo-400 rounded-tr-xl rounded-br-xl px-4 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
