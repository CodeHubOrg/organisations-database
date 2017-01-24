import React, { Component } from 'react'
import { Link } from 'react-router'

class ItemTile extends Component {
    
    render() {

      //console.log(typeof this.props.resource.linkurl)

    let resource = this.props.resource;
    let difficultyClass = "difficulty difficulty-"+resource.difficulty;
    let typeClass = "resource--type resource--"+resource.type;
    let url = ''
    let linktext = ''
    let linkitem = ''
    if(resource.linkurl !== undefined){
       url = resource.linkurl
       linktext = (resource.linktext !== undefined) ? resource.linktext : url
       linkitem = <li><a rel="external" target="_blank" href={url}>{linktext}</a></li>    
    }
    console.log(linkitem)

    return(
            <div className="grid__cell u-1/2--medium u-1/3--large">
                <div className="resource">
                    <div className="resource--header text--centered">
                        <h3>{resource.name}</h3>
                    </div>
                    <ul className="resource--info-lines">
                        <li className="top">
                            <div className="grid grid--full">
                                <div className="grid__cell u-1/4">
                                    <div className={difficultyClass}></div>
                                </div>
                                <div className="grid__cell u-1/4">
                                    <div className="duration">{ resource.duration }</div>
                                </div>
                                <div className="grid__cell u-1/2">
                                    <div className={typeClass} >
                                    {resource.type}
                                    </div>
                                </div>
                            </div>
                        </li>

                        {linkitem}
                        <li className="description">
                        {resource.description}
                        </li>
                    
                        <li>
                            <span className="key">Author:</span> {resource.author}
                        </li>
                        <li>
                            <span className="label">JS general</span>
                        </li>                      
                    </ul>
                </div>
            </div>
        )
    }
} 

export default ItemTile