import React, { Component } from 'react'
import { selectFilter } from '../actions'
import { connect } from 'react-redux'
import FilterBar from '../components/FilterBar'

const FilterContainer = ({filter, filterAction}) => { 
  return (

    const testFunction = (){ console.log('test function')}
    <FilterBar handleChange={testFunction}/>
   /* <div>
      <button onClick={() => selectView(changedview)} className="btn btn-info">View as {choice}</button>
    </div>*/
  )
}

const mapStateToProps = (state) => {
  return { filter : state.filter }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterAction: (filter) => {
      dispatch(selectFilter(filter))
    }
  }
} 


export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)