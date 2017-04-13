import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchFilter, setSearchResults, setKeyword } from '../../../../actions'
import {RESOURCE_TYPE, DIFFICULTY} from '../../../../constants/FilterCategories'
import FilterByKeyword from './FilterByKeyword'
import SelectFormField from '../../../core/SelectFormField'

class Search extends Component {
  constructor (props) {
    super(props)
    this.handleSetFilter = this.handleSetFilter.bind(this)
    this.handleSetKeyword = this.handleSetKeyword.bind(this)
    this.setSearchResults = this.setSearchResults.bind(this)
    this.handleFilterItems = this.handleFilterItems.bind(this)
    this.state = {
      'items': this.props.items,
      'filters': this.props.filters
    }
  }

  componentDidMount () {
    this.setSearchResults(this.props.items)
  }

  render () {
    const {filters} = this.props
    const selectType = ['All','Book','Video','Podcast','Online written tutorial','Online interactive','Reference']
    const selectOptionsType = selectType.map((option) => { return [option, option]})
    const selectDifficulty = ['Beginner','Advanced Beginner','Intermediate','Advanced','Very complex','All levels']
    const  selectOptionsDifficulty = selectDifficulty.map((option, index) => {
      return [index, option]
    })
    return (
      <div className='search-component'>
        <h3>Search By</h3>
        <br />
        <FilterByKeyword
          setKeyword={this.handleSetKeyword}
        />
        <p>OR</p>

        <SelectFormField 
          name="type"
          labelName="Resource Type:"
          options={selectOptionsType}
          defaultVal="All"
          val={filters.RESOURCE_TYPE}
          callback={this.handleSetFilter}
        />

        <SelectFormField 
          name="difficulty"
          labelName="Level:"
          options={selectOptionsDifficulty}
          defaultVal="All"
          val={filters.DIFFICULTY}
          callback={this.handleSetFilter}
        />
      
      </div>
    )
  }

  handleSetKeyword (event) {
    let keyword = event.target.value
    this.props.setKeyword(keyword)
    this.searchData(keyword)
  }

  handleSetFilter (event) {
    const category = (event.target.name == "type") ? RESOURCE_TYPE : DIFFICULTY
    const filter = event.target.value
    const filterObj = (category == RESOURCE_TYPE) ? {RESOURCE_TYPE: filter} : {DIFFICULTY: filter}
   
    const filters = Object.assign({}, this.props.filters, filterObj)
    this.setState({filters: filters}, () => {      
      this.handleFilterItems(filters)
    })
    this.props.setSearchFilter(category, filter)   
  }

  handleFilterItems (filters) {
    const items = this.props.items
    if(!(filters.RESOURCE_TYPE == 'All' && filters.DIFFICULTY == 5)) {
      const filteredItems = items.filter((item) => {
        const cond1 = () => filters.RESOURCE_TYPE == 'All' || filters.RESOURCE_TYPE == item.type
        const cond2 = () => filters.DIFFICULTY == 5 || filters.DIFFICULTY == item.difficulty || item.difficulty == 5
        return cond1() && cond2()
      })
      this.setSearchResults(filteredItems)
      return
    }
    this.setSearchResults(items)
  }

  searchData (searchterm) {
    const {items} = this.props
    const results = items.filter(
      (item) => {
        return item.name.toLowerCase().search(searchterm.toLowerCase()) !== -1 ||
          item.author.toLowerCase().search(searchterm.toLowerCase()) !== -1
      }
    )
    this.setSearchResults(results)
  }

  setSearchResults (items) {
    this.props.setSearchResults(items)
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
