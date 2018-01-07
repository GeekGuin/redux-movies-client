import React from 'react';

const SearchBarForm = (props) => {
  return(
    <form className="my-2 my-lg-0 form-inline" onSubmit={ props.handleSubmit }>
      <input
        onChange={ props.handleChange } 
        className="form-control mr-sm-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        value={ props.value } />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  );
}
export default SearchBarForm;