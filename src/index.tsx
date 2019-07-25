import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { AppConnected } from "./app/App";
import { reducers } from "./infra/reducers";

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  
  body {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow-x: hidden;
    min-width: 320px;
  }
`;
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <>
      <GlobalStyles />
      <AppConnected />
    </>
  </Provider>,
  document.getElementById("root")
);
