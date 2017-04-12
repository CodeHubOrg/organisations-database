import React from 'react'

const FilterByKeyword = ({defaultVal, setKeyword}) => {
  return (
      <div>
           <div>Search By Author, Title or Keyword</div>
          <input
          placeholder= "Find a resource - search by author, title or keyword"
          className = "search-input"
          value={defaultVal}
          onChange={setKeyword}/>
      </div>
  )
}

export default FilterByKeyword
