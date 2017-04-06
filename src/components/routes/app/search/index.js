import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSearchFilter, setSearchResults } from '../../../../actions'
import {RESOURCE_TYPE, DIFFICULTY} from '../../../../constants/FilterCategories'
import FilterByResource from './FilterByResource'
import FilterByDifficulty from './FilterByDifficulty'
import FilterByKeyword from './FilterByKeyword'

class Search extends Component {
  constructor (props) {
    super(props)
    this.handleSetFilter = this.handleSetFilter.bind(this)
    this.handleSetSearchResults = this.handleSetSearchResults.bind(this)
  }

  componentDidMount () {
   this.handleSetSearchResults(this.props.allItems)
  }

  render () {
    const {filter} = this.props
    return (
      <div className='search-component'>

        <FilterByKeyword setSearchResults={this.handleSetSearchResults} />
        <FilterByResource
        defaultVal={filter.RESOURCE_TYPE}
        callback={this.handleSetFilter}
        category={RESOURCE_TYPE}
      />
      <FilterByDifficulty
        defaultVal={filter.DIFFICULTY}
        callback={this.handleSetFilter}
        category={DIFFICULTY}
      />

       <span className="input-group-btn">
            <button type="submit" className="btn btn-scondary">Search</button>
            </span>
      </div>
    )
  }

  handleSetFilter (event, category) {
    // Dispatch action which will set filter state in Redux
    // e.g. ResourceType: url
    let filter = event.target.value
    this.props.selectSearchFilter(category, filter)
  }

  handleSetSearchResults (items) {
    this.props.setSearchResults(items)
  }

}

const mapStateToProps = (state) => {
  return {
    filter: state.searchFilters,
    allItems: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSearchFilter: (category, filter) => {
      dispatch(selectSearchFilter(category, filter))
    },
    setSearchResults: (items) => {
      dispatch(setSearchResults(items))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
