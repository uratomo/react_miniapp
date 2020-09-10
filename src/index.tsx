import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from "./components/timer";
import Counter from "./components/counter";
import TrafficLight from "./components/traffic_light";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Timer />
    <Counter />
    <TrafficLight />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
