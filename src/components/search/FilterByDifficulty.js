import React from 'react'

const FilterByDifficulty = ({defaultVal, callback, category}) => {
  return (
    <div className="form--control">
        <div>Search By Difficulty</div>
        <select
            id="type"
            onChange={(e) => callback(e, category)}
            defaultValue={defaultVal}
        >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
        </select> 
    </div>
  )
}

export default FilterByDifficulty