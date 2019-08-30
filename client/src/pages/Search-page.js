import React from 'react';
import SearchBar from '../components/searchbar';
import DisplayBoxReturned from '../components/display-box-returned'



const SearchPage = ()=>{
  return (
    <div className="App">
      <h1> Search for a book here!</h1>
      <SearchBar BookSearch={
        ()=>{
          
        }
      } />
      <DisplayBoxReturned />
    </div>
  );
}

export default SearchPage;
