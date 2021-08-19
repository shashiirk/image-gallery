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
      <div className="max-w-md w-full rounded-lg m-auto flex bg-white shadow-md">
        <input
          type="text"
          className="w-full outline-none rounded-tl-xl rounded-bl-xl pl-4 py-3"
          placeholder="Search images..."
          value={inputTerm}
          onChange={changeInputHandler}
        />
        <button className="bg-transparent w-16 text-indigo-400 rounded-tr-xl rounded-br-xl focus:outline-none">
          <i className="fas fa-search text-lg"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
