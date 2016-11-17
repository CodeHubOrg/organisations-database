import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../../containers/App'
import ItemList from '../../components/ItemList'

function setup() {
  const  initialState ={ 
    items: [
      {
        id: 1,
        name: 'Javascript 101',
        selected: false
      },
      {
        id: 2,
        name: 'CodeHub Bristol',
        selected: false
      }
    ]}

  const store = createStore(function (state = initialState){return state});
  Provider.childContextTypes = {
    store: React.PropTypes.object
  };

  const component = mount(
    <Provider store={store}>
      <App />
    </Provider>
  )

  return {
    component: component
  }
}

describe('App container', () => {
  it('should display a title', () => {
    const { component } = setup();
    expect(component.contains(<h1>JavaScript tools and resources</h1>)).toBe(true)
  });
  it('contains an <ItemList /> component', function () {
    const { component } = setup()
    expect(component.find(ItemList).length).toBe(1);
  });
})
