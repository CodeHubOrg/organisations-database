import React, { Component } from 'react'
import { Link } from 'react-router'

class ItemTile extends Component {
    constructor (props){
      super(props)
      this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) {
      e.preventDefault()
      let xhr = new XMLHttpRequest()
      xhr.open('DELETE',
      encodeURI('/api/items/'+this.props.resource.id))
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send()

      xhr.onload = function(){
        console.log(xhr)
      }
      xhr.onerror = function(error){
        console.log(error.message)
      }
    }

    render() {

    let resource = this.props.resource
    let difficultyClass = 'difficulty difficulty-' + resource.difficulty
    let typeClass = 'resource--type resource--' + resource.type
    let url = ''
    let linktext = ''
    let linkitem = ''
    if (resource.linkurl !== undefined) {
       url = resource.linkurl
       linktext = (resource.linktext !== undefined) ? resource.linktext : url
       linkitem = <li><a rel="external" target="_blank" href={url}>{linktext}</a></li>
    }
    let editlink = '/edit/' + resource.id

    return (
            <div className="grid_cell">
                <div className="resource">
                    <div className="resource--header text--centered">
                        <h3>{resource.name}</h3>
                    </div>
                    <ul className="resource--info-lines">
                        <li className="top">
                            <div className="flex-container info">
                                <div>
                                    <div className={difficultyClass}></div>
                                </div>
                                <div>
                                    <div className="duration">{ resource.duration }</div>
                                </div>
                                <div>
                                    <div className={typeClass} >
                                    {resource.type}
                                    </div>
                                </div>
                            </div>
                            <span>Author:</span> {resource.author}
                        </li>

                        {linkitem}
                        <li className="description">
                        {resource.description}
                        </li>
                        
                        <li>
                            <span className="label">{resource.tags}</span>
                        </li>
                        <li>
                        <Link to={editlink}>Edit</Link>&nbsp;&nbsp;
                        <a href="" onClick={this.handleDelete}>Delete</a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default ItemTile
