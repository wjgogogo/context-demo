import React, {PureComponent} from "react";
import {Consumer} from "./context/themeContext";

class Child extends PureComponent {
  render() {
    return <Consumer>
      {
        style => <div style={style}>This is Child Component that gets style value through context.</div>
      }
    </Consumer>
  }
}

export default Child;