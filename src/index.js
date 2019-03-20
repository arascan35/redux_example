import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Example1reducer from "./store/reducers/Example1reducer";
import Example2reducer from "./store/reducers/Example2reducer";
import Example3reducer from "./store/reducers/Example3reducer";
const logAction = store => {
  // basicly this i my middleware fnction but we are going to use react-thunk as middleware function
  return next => {
    return action => {
      const result = next(action);
      console.log(`Caught in the middleware ${JSON.stringify(result)}`);
    };
  };
};
const rootReducer = combineReducers({
  r1: Example1reducer,
  r2: Example2reducer,
  r3: Example3reducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
