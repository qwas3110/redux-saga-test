import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {increment, incrementAsync} from "./actions/counter";
import {get_user} from "./actions/user";

class App extends React.Component {


  render() {
    const { isFetching, error, user } = this.props.user;

    let data;

    if (error) {
        data = error
    } else if (isFetching) {
        data = 'Loading...'
    } else {
        data = user && user.data[0].name
    }

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
            <h1>{data}</h1>
        </div>
    );
  }

}


function mapStateToProps (state) {
  return {
    counter: state.counter,
    user: state.user
  }
}


export default connect(
    mapStateToProps,
    {increment, incrementAsync, get_user}
)(App)
