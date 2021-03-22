import React from 'react';
import ReactDOM from 'react-dom';

import NoteList from './views/note-list/note-list';
import reportWebVitals from './reportWebVitals';

import './styles/reset.css';
import './styles/base.css';

ReactDOM.render(
  <React.StrictMode>
    <NoteList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
