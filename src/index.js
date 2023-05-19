import React from "react";
import Reactdom from "react-dom";
import App from "./App";
import "./index.css";

//
import  {createStore}  from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducers/index";
const store = createStore(rootReducer);
console.log("store value",store);
//

// jsx
Reactdom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
