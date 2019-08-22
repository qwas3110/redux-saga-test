import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {increment, incrementAsync} from "./actions/counter";
import {get_user} from "./actions/user";

class App extends React.Component {


  render() {
    return (
        <div className="App">
            <p>{this.props.counter}</p>
            <p>
              <button onClick={this.props.increment}>+</button>
            </p>
            <p>
              <button onClick={this.props.incrementAsync}>Async</button>
              <button onClick={this.props.get_user}>getUser</button>
            </p>

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
    {increment, incrementAsync, get_user}
)(App)
