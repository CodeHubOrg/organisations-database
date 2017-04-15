import React from 'react'

const FilterByKeyword = ({defaultVal, setKeyword}) => {
  return (
      <div className="form--control">
          <label htmlFor="searchkeyword">Author, Title or Keyword</label>
          <input
          id="searchkeyword"
          placeholder= "Find a resource - search by author, title or keyword"
          className = "search-input"
          value={defaultVal}
          onChange={setKeyword}/>
      </div>
  )
}

export default FilterByKeyword
