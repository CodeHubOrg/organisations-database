import React, { Component } from 'react'
import { connect } from 'react-redux'

class FilterByKeyword extends Component {

  constructor (props) {
    super(props)
    // Map over each Item and extract name, author and key
    const items_data = this.props.items.map(
      (item, index) => {
        return {
          name: item.name,
          author: item.author,
          key: index
        }
      }
    )

    this.state = {
      term: '',
      result_orig: '',
      initial_items: items_data,
      result_data: null
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.filterData = this.filterData.bind(this)
  }

  filterData (searchterm) {

    let results = this.state.initial_items.filter(
      // Return the item if the search term is  contained in the
      // 'name' or 'author' property
      (item) => {
        return item.name.toLowerCase().search(searchterm.toLowerCase()) !== -1 ||
          item.author.toLowerCase().search(searchterm.toLowerCase()) !== -1 
      }
    )
    this.props.setSearchResults(results)
  }

  onInputChange (event) {
    this.setState({term: event.target.value})
    this.filterData(event.target.value)
  }

  render () {
    return (
      <div>
        <form onSubmit= {this.onFormSubmit} className="input-group">
          <input
          placeholder= "Find a resource - search by author, title or keyword"
          className = "search-input"
          value={this.state.term}
          onChange={this.onInputChange}/>

        </form>
        <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 'items': state.items }
}

export default connect(mapStateToProps)(FilterByKeyword)
