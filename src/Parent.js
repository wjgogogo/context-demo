import React, {PureComponent} from "react";
import Child from "./Child";


class Parent extends PureComponent {
  render() {
    return <Child/>
  }
}

export default Parent;
