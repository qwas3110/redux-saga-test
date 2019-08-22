import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {increment} from "./actions/counter";

class App extends React.Component {


  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>{this.props.counter}</p>
            <p>
              <button onClick={this.props.increment}>+</button>
            </p>
          </header>

        </div>
    );
  }

}


function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}


export default connect(
    mapStateToProps,
    {increment}
)(App)
