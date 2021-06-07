//imports
import { ProjectComponent } from './Components/WorkLoadClassComponent';
import { DueDateComponent } from './Components/WorkLoadDueDateComponent';
import { ClassComponent } from './Components/WorkLoadClassComponent';
import { DescriptionComponent } from './Components/WorkLoadDescriptionComponent';
import { IsImportantComponent } from './Components/WorkLoadIsImportantComponent';
import { addWorkLoadData } from './Functions/AddWorkLoadData';
import { deleteWorkData } from './Functions/DeleteWorkData';

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

    const form = document.getElementById('workLoadMaker');

    form.onsubmit = addWorkLoadData;
});

class WorkLoadApp extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        <div class="main-div">
            <ClassComponent />
            
            <ProjectComponent />

            <DescriptionComponent />

            <DueDateComponent />

            <IsImportantComponent />

            <button id="addButton" value={addWorkLoadData}>
                Add Item
            </button>

            <button id="deleteButton" value={deleteWorkData}>
                Delete Item
            </button>
        </div>
    }
}