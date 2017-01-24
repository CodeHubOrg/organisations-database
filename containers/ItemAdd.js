import React, { Component } from 'react'
// import * as actions from '../actions'

class ItemAdd extends Component {
  render () {
    const handleSubmit = (e) => {
      let form = e.target
      let name = form.querySelector('[name="resource_name"]').value
      let author = form.querySelector('[name="resource_author"]').value
      let linktext = form.querySelector('[name="resource_linktext"]').value
      let linkurl = form.querySelector('[name="resource_linkurl"]').value
      let difficulty = form.querySelector('[name="resource_difficulty"]:checked').value
      let type = form.querySelector('[name="resource_type"]').value
      let duration = form.querySelector('[name="resource_duration"]').value
      let description = form.querySelector('[name="resource_description"]').value
      let xhr = new XMLHttpRequest()
      xhr.open('POST',
      encodeURI('/api/items/'))
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify({
        name,
        author,
        difficulty,
        linktext,
        linkurl,
        type,
        duration,
        description,
        selected: false
      }))
    }

    return (
        <div>
        <h1>Add a new resource</h1>
            <form className="form--add" onSubmit={handleSubmit} >
                <div className="form--control">
                    <label for="resource_name">Title: </label>
                    <input type="text" name="resource_name" id="name" />
                </div>
                <div className="form--control">
                    <label for="author">Author (if known):</label>
                    <input type="text" name="resource_author" id="author" />
                </div>
                <div className="form--control">
                    <label for="author">Link text:</label>
                    <input type="text" name="resource_linktext" id="linktextr" />
                </div>
                <div className="form--control">
                    <label for="author">Link URL:</label>
                    <input type="text" name="resource_linkurl" id="linkurl" />
                </div>                

                <div className="outer-label">Difficulty:</div>
                <div className="form--control marg-left">

                    <radiogroup className="grid">
                        <div className="grid__cell u-1/3">
                            <label for="beginner"><input id="beginner" type="radio" value="1" name="resource_difficulty" />Beginner</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="adv_beginner"><input id="adv_beginner" type="radio" value="2" name="resource_difficulty" />Advanced Beginner</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="intermediate"><input id="intermediate" type="radio" value="3" name="resource_difficulty" />Intermediate</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="int_advanced"><input id="int_advanced" type="radio" value="4" name="resource_difficulty" />Advanced</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="advanced"><input id="advanced" type="radio" value="5" name="resource_difficulty" />Very complex</label>
                        </div>
                        <div className="grid__cell u-1/3">
                            <label for="advanced"><input id="all" type="radio" value="6" name="resource_difficulty" />All levels</label>
                        </div>
                    </radiogroup>
                </div>
                <div className="form--control">
                    <label for="type">Type:</label>
                    <select id="type" name="resource_type">
                        <option value="Book">Book</option>
                        <option value="Video">Video</option>
                        <option value="Podcast">Podcast</option>
                        <option value="Online written">Online written tutorial</option>
                        <option value="Online interactive">Online interactive</option>
                        <option value="Reference">Reference</option>
                    </select>
                </div>
                <div className="form--control">
                    <label for="duration">Duration:</label>
                    <select name="resource_duration" id="duration">
                        <option value="3hrs">&lt; 3 hrs</option>
                        <option value="1day">3 hrs to a day</option>
                        <option value="1week">about a week</option>
                        <option value="weeks">several weeks</option>
                        <option value="long">long</option>
                        <option value="ongoing">ongoing</option>
                    </select>
                </div>
                <div className="form--control">
                    <label className="v-top" for="description">Description:</label>
                    <textarea col="10" rows="5" name="resource_description" id="description" />
                </div>
                <div className="form--control marg-left">
                    <input className="btn btn--submit" type="submit" value="Post" />
                </div>
            </form>
        </div>
    )
  }
}

export default ItemAdd
