import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Provider} from 'react-redux';
import store from './store';
import Form from './form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Form/>
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
