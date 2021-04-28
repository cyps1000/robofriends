import React from "react";
import ReactDOM from "react-dom";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducers";
import "tachyons";

import "./index.css";
import App from "./containers/App";
const logger = createLogger();

const rootReducer = combineReducers({ requestRobots, searchRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
