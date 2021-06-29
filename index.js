/*
    Created By Dylan Chirigotis 6/1/2021
    Tested By Dylan Chirigotis
    Last Updated 6/26/2021

    WorkLoad Project

    Program keeps track of your work and applies CRUD functionality to an agenda-like list

    Github Repo: https://github.com/DillJoker5/WorkLoad-repo/tree/development
*/

//imports
import App from './Components/App';
import React from 'react';
import ReactDOM from 'react-dom';


//database where I will keep all of my workload items
let workloadDB;

//load event listener
window.addEventListener("load", () => {
    //open a version of my database
    let request = window.indexedDB.open('workload.db', 1);

    request.onerror = () => {
        alert('Database failed. Please fix it!');
    };

    request.onsuccess = () => {
        console.log('Successfully opened workload database!');

        //save the database
        workloadDB = request.result;
        displayWorkLoadData();
    };

    request.onupgradeneeded = e => {
        let workloadDB = e.target.result;

        //create object store
        let objectStore = workloadDB.createObjectStore('workload.db', {
            keyPath: 'id',
            autoIncrement: true
        });

        //define what is being stored in the workload object store
        objectStore.createIndex('class', 'class', { unique: false });
        objectStore.createIndex('project', 'project', { unique: false });
        objectStore.createIndex('description', 'description', { unique: false });
        objectStore.createIndex('dueDate', 'dueDate', { unique: false });
        objectStore.createIndex('isImportant', 'isImportant', { unique: false });

        console.log('Setup is complete for the database');
    };
});

function Index(){
    return (
        <App />
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root')
);