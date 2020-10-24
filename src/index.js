import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/index.css';
import App from './App';
// import TopBar from './components/TopBar';
// import MyFooter from './components/MyFooter';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(< App />, document.getElementById("root"))
// ReactDOM.render(< MyFooter />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
