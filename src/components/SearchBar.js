import React from "react";

const SearchBar = ({ search, term, setTerm }) => {
  const onChange = e => setTerm(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    search(term);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={term}
          autoComplete="off"
          required
        />
        <label htmlFor="name" className="label-name">
          <span className="content-name">Search Food</span>
        </label>
      </form>
    </>
  );
};

export default SearchBar;
