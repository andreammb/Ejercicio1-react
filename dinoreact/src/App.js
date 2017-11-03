import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            data: 'Bla bla bla por ejemplo...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e){
        this.setState({data: e.target.value});
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Digite lo que se le ocurra</h1>
        </header>
        
        <div className = "App-textbox">
        <input type = "text" value = {this.state.data}
        onChange = {this.updateState} />
        <h4>{this.state.data}</h4>
      </div></div>
    );
  }
}

export default App;
