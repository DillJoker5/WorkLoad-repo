import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from '../src/Functions/reportWebVitals';
import getErrorMessage from './Components/ErrorMessages';

export let workLoadDataBase;

//window.addEventListener('load', () => {
    let request = window.indexedDB.open('workLoad_db', 6);
    request.onerror = () => {
        getErrorMessage('failedDatabase');
    }

    request.onsuccess = () => {
        console.log('Successfully created database!');
        workLoadDataBase = request.result;
        console.log(workLoadDataBase);
    }

    request.onupgradeneeded = e => {
        let workLoadDataBase = e.target.result;
        let objectStore = workLoadDataBase.createObjectStore('workLoadProject_os', {
            keyPath: 'id',
            autoIncrement: true
        });
        objectStore.createIndex('id', 'id', { unique: true });
        objectStore.createIndex('class', 'class', {unique: false});
        objectStore.createIndex('project', 'project', {unique: false});
        objectStore.createIndex('description', 'description', {unique: false});
        objectStore.createIndex('dueDate', 'dueDate', {unique: false});
        objectStore.createIndex('isImportant', 'isImportant', {unique: false});
    }

    console.log(workLoadDataBase);
//});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
