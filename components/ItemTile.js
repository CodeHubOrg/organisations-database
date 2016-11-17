import React, { Component } from 'react'

class ItemTile extends Component {
    
    render() {

    let resource = this.props.resource;
    let difficultyClass = "difficulty difficulty-"+this.props.resource.difficulty;
    let typeClass = "resource--type resource--"+resource.type;

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