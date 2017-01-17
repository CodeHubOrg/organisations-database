import React, { Component } from 'react'
import FilterBar from '../components/FilterBar'
import ItemList from '../components/ItemList'
import ItemTiles from '../components/ItemTiles'
import ItemSelectionPanel from '../components/ItemSelectionPanel'
import * as actions from '../actions'
import { Link } from 'react-router'
import SearchBar from '../components/searchBar';

class App extends Component {

    render() {
        const { store } = this.context;
        const items = store.getState().items
        const selectedItem = getSelected()

        function onSelectItem() {
            store.dispatch(actions.selectItem(this.props.id))
        }

        function onDeselectItem() {
            store.dispatch(actions.deSelectItem(this.props.id))
        }

        function getSelected() {
            return items.filter(org => org.selected === true)[0]
        }

        return (

            <div>
                
                <h1>JavaScript tools and resources</h1>
				<h4>Everything you need to get started with Javascript</h4>
				<br />
                <SearchBar items={items} />

			        
                <ItemList
                    dispatch={store.dispatch}
                    items={items}
                    onSelectItem={onSelectItem}
                    onDeselectItem={onDeselectItem}
                />

                <ItemSelectionPanel
                    selectedItem={selectedItem}
                />
                <ul>
                    <li><Link to={'/admin'}>Admin</Link></li>
                </ul>
                <ItemTiles items = { items } />
            </div>
        )
    }
}

// error is thrown if contextTypes is set in constructor
App.contextTypes = {
    store: React.PropTypes.object
}

export default App
