import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, addMessage} from './redux/state';
import {  BrowserRouter as Router } from 'react-router-dom';

export const rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} />
    </React.StrictMode>
  </Router>
);
reportWebVitals();
}
