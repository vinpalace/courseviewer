import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from "redux";
=======
import { createStore, applyMiddleware } from "redux";
>>>>>>> Saving
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
<<<<<<< HEAD
import createSagaMiddleware from "redux-saga";

const sagaMiddilware = createSagaMiddleware();

sagaMiddilware.run();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, sagaMiddilware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
=======

const store = createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> Saving

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
