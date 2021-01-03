import React, { useState } from 'react'

const Search = ({ handleSearch, searchTerm }) => {
  const handleChange = e => {
    handleSearch(e)
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        onChange={handleChange}
        value={searchTerm}
      />
      <p>Searching For: {searchTerm}</p>
    </div>
  )
}

export default Search
