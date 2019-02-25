import {createContext} from "react";

export const {Provider, Consumer} = createContext({
  color: "green",
  fontSize: "20px"
});
