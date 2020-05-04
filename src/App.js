import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    text: '',
    reversedString: ''
  }
  updateText = (text) => {
    this.setState(() => ({
      text: text
    }))
    this.mirrorText(text)
  }
  mirrorText = (text) => {
    let tempString = text.split("")
    tempString.reverse()
    console.log(tempString)
    this.setState(() => ({
      reversedString: tempString
    }))
  }
  render() {
    const {text, reversedString} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" value={text} onChange={(event) => this.updateText(event.target.value)} placeholder="Say Something" />
    <p className="echo">Echo: {reversedString}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
