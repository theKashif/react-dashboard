import React from "react";
import searchIcon from "../assets/svgs/search.svg";


const SearchBar = () => {
  return (
    <form
      aria-label="Search requests"
      className="flex items-center bg-skyBlue rounded-2xl px-4 py-2 h-[42px] w-full max-w-[272px] sm:max-w-xs flex-shrink"
      role="search"
    >
      <img src={searchIcon} />
      <input
        aria-label="Search input"
        className="bg-transparent text-gray-600 placeholder-gray-400 text-sm ml-2 w-full focus:outline-none"
        placeholder="Search"
        type="search"
      />
    </form>
  );
};

export default SearchBar;
