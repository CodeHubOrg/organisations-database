import React, { Component } from 'react'

const FilterBar = ( { handleChange }) => {

	return (
			<div className="form--control">

             <label for="type">Type:</label>
                  <select id="type" name="resource_type" onChange={handleChange} >
                     <option value="Book" selected="Book">Book</option>
                     <option value="Video">Video</option>
                     <option value="Podcast">Podcast</option>
                     <option value="Online written">Online written tutorial</option>
                     <option value="Online interactive">Online interactive</option>
                     <option value="Reference">Reference</option>
                   </select>
             </div>
		);
}

export default FilterBar