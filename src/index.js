import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'


// const messageData = [
//   {
//       id: 1,
//       message: 'What\'s your name?',
//       likesCount: 23
//   },
//   {
//       id: 2,
//       message: 'Hi! I\'m Alex!',
//       likesCount: 11
//   },
//   {
//       id: 3,
//       message: 'Nice to meet you!',
//       likesCount: 17
//   }
// ];

// const dialogsData = [
//   {
//       id: 1,
//       name: 'Alex'
//   },
//   {
//       id: 2,
//       name: 'Vasya'
//   },
//   {
//       id: 3,
//       name: 'Dayana'
//   }
// ];

// const postData = [
//   {
//       id: 1,
//       message: 'Hello, world!'
//   },
//   {
//       id: 2,
//       message: 'Yo!'
//   },
//   {
//       id: 3,
//       message: 'Hi, men!'
//   }
// ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);
reportWebVitals();
