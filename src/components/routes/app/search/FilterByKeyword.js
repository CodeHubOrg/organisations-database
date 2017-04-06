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
    //if (searchterm.length > 0) {
     // console.log('setting to search results')
     // this.setState({result_data: results, result_orig: false})
    //} else {
    //  console.log('setting to orig items')
    //  this.setState({result_data: this.props.items, result_orig: false})
    //}
    this.props.setSearchResults(results)
  
  }

  onInputChange (event) {
    this.setState({term: event.target.value})
    this.filterData(event.target.value)
    console.log('onInputChange ', this.state.result_data)
    //this.props.setSearchResults(this.state.result_data)
  }

  render () {
    /*
    let results
    if (this.state.result_orig) {
      results = this.state.result_orig
    } else {
      if (this.state.result_data) {
        let items_list = this.state.result_data.map(
        (item, index) => {
          return <li key={index}>{item.author} - {item.name}</li>
        }
      )
        results = <ul>{items_list}</ul>
      }
    }
    */
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
