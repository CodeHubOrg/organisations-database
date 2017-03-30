import React, { Component } from 'react'
import { connect } from 'react-redux'

class FilterByKeyword extends Component {
  constructor (props) {
    super(props)
      const items_data = this.props.items.map(
          (item, index) => {
            return {
              name: item.name,
              author: item.author,
              key: index
            }
          }
        )

      this.state = {term:'',
                    result_orig: '',
                    initial_items: items_data,
                    result_data: null
                                                            }
      this.onInputChange = this.onInputChange.bind(this)
      this.filterData =  this.filterData.bind(this)
    }

    filterData(searchterm){
        let results = this.state.initial_items.filter(
          (item) => {
            return item.name.toLowerCase().search(searchterm.toLowerCase()) !== -1 ||
            item.author.toLowerCase().search(searchterm.toLowerCase()) !== -1       
          }
        )
        if(searchterm.length > 2){
          this.setState({result_data: results, result_orig: false})
        } else {
          this.setState({result_data: null, result_orig: false})
        }
    }

    onInputChange(event){
      this.filterData(event.target.value)
      this.setState({term:event.target.value}) 
      /* ------- REFACTOR ------- */
      this.props.callback(this.state.result_data)
      /* ------- REFACTOR ------- */
    }

  render(){  
      let results;  
      if(this.state.result_orig){
        results = this.state.result_orig
      } else {
        if(this.state.result_data){
        let items_list = this.state.result_data.map(
          (item) => {
            return <li>{item.author} - {item.name}</li> 
           }
          )        
        results = <ul>{items_list}</ul>
        }
      }
      return(
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
      /*
      return(
      <div>
        <form onSubmit= {this.onFormSubmit} className="input-group">
          <input
          placeholder= "Find a resource - search by author, title or keyword"
          className = "form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>

          <span className="input-group-btn">
            <button type="submit" className="btn btn-scondary">Search By Author or Title</button>
            </span>
        </form>
        <div className="">{results}</div>
        <br />
      </div>
      )
      */
    }
  }

const mapStateToProps = (state) => {
  return { "items": state.items }
}

export default connect(mapStateToProps)(FilterByKeyword)
