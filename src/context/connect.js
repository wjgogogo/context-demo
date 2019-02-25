import React from "react";
import {Consumer} from "./context";

export default mapState => {
  return WrappedComponent => {
    const Component = props => (<Consumer>
      {
        value => {
          let mappedProps = mapState(value);
          return <WrappedComponent {...props} {...mappedProps}/>
        }
      }
    </Consumer>);

    Component.displayName = `connect(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
    return Component;
  }
};

