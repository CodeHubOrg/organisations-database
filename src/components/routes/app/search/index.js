import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchFilter, setSearchResults, setKeyword } from '../../../../actions'
import {RESOURCE_TYPE, DIFFICULTY} from '../../../../constants/FilterCategories'
import FilterByResource from './FilterByResource'
import FilterByDifficulty from './FilterByDifficulty'
import FilterByKeyword from './FilterByKeyword'

class Search extends Component {
  constructor (props) {
    super(props)
    this.handleSetFilter = this.handleSetFilter.bind(this)
    this.handleSetKeyword = this.handleSetKeyword.bind(this)
    this.setSearchResults = this.setSearchResults.bind(this)
  }

  componentDidMount () {
    this.setSearchResults(this.props.items)
  }

  render () {
    const {filters} = this.props
    return (
      <div className='search-component'>

        <FilterByKeyword
        setKeyword={this.handleSetKeyword}
        />
        <FilterByResource
        defaultVal={filters.RESOURCE_TYPE}
        setFilter={this.handleSetFilter}
        category={RESOURCE_TYPE}
      />
      <FilterByDifficulty
        defaultVal={filters.DIFFICULTY}
        setFilter={this.handleSetFilter}
        category={DIFFICULTY}
      />
      
      </div>
    )
  }

  handleSetKeyword (event) {
    let keyword = event.target.value
    this.props.setKeyword(keyword)
    this.searchData(keyword)
  }

  handleSetFilter (event, category) {
    let filter = event.target.value
    this.props.setSearchFilter(category, filter)
  }

  setSearchResults (items) {
    this.props.setSearchResults(items)
  }

  searchData (searchterm) {
    const {items} = this.props
    let results = items.filter(
      (item) => {
        return item.name.toLowerCase().search(searchterm.toLowerCase()) !== -1 ||
          item.author.toLowerCase().search(searchterm.toLowerCase()) !== -1
      }
    )
    this.setSearchResults(results)
  }

}

const mapStateToProps = (state) => {
  return {
    filters: state.searchFilters,
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchFilter: (category, filter) => {
      dispatch(setSearchFilter(category, filter))
    },
    setSearchResults: (items) => {
      dispatch(setSearchResults(items))
    },
    setKeyword: (keyword) => {
      dispatch(setKeyword(keyword))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
