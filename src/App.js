import React, {Component} from 'react';
import './App.css';
import {Provider} from "./context";
import StudentContainer from "./StudentContainer";

class App extends Component {

  onIncreaseAge = () => {
    this.setState(preState => ({
      age: preState.age + 1
    }))
  };

  state = {
    name: "张三",
    age: 12,
    gender: "男",
    onIncreaseAge: this.onIncreaseAge
  };

  render() {
    return (
      <div className="App">
        <Provider value={this.state}>
          <StudentContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;
