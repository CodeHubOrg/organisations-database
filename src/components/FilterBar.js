import React, { Component } from 'react'

const FilterBar = ( { onHandleChange }) => {

	return (
			<div className="form--control">

             <label for="type">Type:</label>
                  <select id="type" name="resource_type" onChange={onHandleChange} >
                     <option value="Book" ref="book" selected="Book">Book</option>
                     <option value="Video" ref="video">Video</option>
                     <option value="Podcast">Podcast</option>
                     <option value="Online written">Online written tutorial</option>
                     <option value="Online interactive">Online interactive</option>
                     <option value="Reference">Reference</option>
                   </select>
             </div>
		);
}

const onHandleChange = ((e) => {e.preventDefault()
  let onSelectionType = this.refs.value;

});

export default FilterBar