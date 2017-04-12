import React from 'react'

const FilterByResource = ({defaultVal, setFilter, category}) => {
  return (
    <div className="form--control">
        <div>Search By Resource Type</div>
        <select
            id="type"
            onChange={(e) => setFilter(e, category)}
            defaultValue={defaultVal}
        >
            <option value="all">All</option>
            <option value="book">Book</option>
            <option value="video">Video</option>
            <option value="podcast">Podcast</option>
            <option value="online-written">Online written tutorial</option>
            <option value="online-interactive">Online interactive</option>
            <option value="reference">Reference</option>
        </select>
    </div>
  )
}

export default FilterByResource
