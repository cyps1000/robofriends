import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducers";
import "tachyons";

import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({ requestRobots, searchRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker();
