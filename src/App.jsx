import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';

import Filter from './people/Filter';
import People from './people/People';
import store from './store'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Exercise - Filter</h2>
          <p className='App-header__intro'>
            Visit&nbsp;
            <a href='https://github.com/blisher/react_filter_exercise'>this repository</a>
            &nbsp;for instructions.
          </p>
        </div>
        <Provider store={store}>
          <div className='App-wrapper'>
            <Filter />
            <People />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
