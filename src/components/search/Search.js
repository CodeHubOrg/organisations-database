import React, { Component } from 'react'
import { selectSearchFilter } from '../../actions'
import { connect } from 'react-redux'
import * as FILTER_CATEGORIES from '../../constants/FilterCategories'
import FilterByResource from './FilterByResource'
import FilterByDifficulty from './FilterByDifficulty'
import FilterByKeyword from './FilterByKeyword'

class Search extends Component {

  constructor (props) {
    super(props)
    this.handleSetFilter = this.handleSetFilter.bind(this)
  }

  render () {
    return (
      <div className='search-component'>

        <FilterByKeyword />
        <FilterByResource
        defaultVal={this.props.filter}
        callback={this.handleSetFilter}
        category={FILTER_CATEGORIES.RESOURCE_TYPE}
      />
      <FilterByDifficulty
        defaultVal={this.props.filter}
        callback={this.handleSetFilter}
        category={FILTER_CATEGORIES.DIFFICULTY}
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
    const filter = event.target.value
    this.props.selectSearchFilter({category, filter})
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSearchFilter: (filter) => {
      dispatch(selectSearchFilter(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
