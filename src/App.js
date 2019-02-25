import React, {Component} from 'react';
import './App.css';
import {Provider} from "./context/themeContext";
import Parent from "./Parent";

class App extends Component {
  state = {
    color: "red",
    fontSize: "16px"
  };

  render() {
    return (
      <div className="App">
        <Provider value={this.state}>
          <Parent/>
        </Provider>
      </div>
    );
  }
}

export default App;
