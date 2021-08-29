import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: "GOOD"
    });
  };
  const dispatchers = {
    good: () => {
      store.dispatch({
        type: "GOOD"
      });
    },
    bad: () => {
      store.dispatch({
        type: "BAD"
      });
    },
    neutral: () => {
      store.dispatch({
        type: "NEUTRAL"
      });
    },
    zero: () => {
      store.dispatch({
        type: "ZERO"
      });
    }
  };

  return (
    <div>
      <button onClick={dispatchers.good}>good</button>
      <button onClick={dispatchers.neutral}>neutral</button>
      <button onClick={dispatchers.bad}>bad</button>
      <button onClick={dispatchers.zero}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().neutral}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
