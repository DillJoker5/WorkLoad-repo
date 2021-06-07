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

    const adderForm = document.getElementById('workLoadAdder');
    adderForm.onsubmit = addWorkLoadData;

    const deleterForm = document.getElementById('workLoadDeleter');
    deleterForm.onsubmit = deleteWorkData;
});

class WorkLoadApp extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        <div class="main-div">
            <ClassComponent class="classComponentCSS"/>
            
            <ProjectComponent class="projectComponentCSS"/>

            <DescriptionComponent class="descriptionComponentCSS"/>

            <DueDateComponent class="dueDateComponentCSS"/>

            <IsImportantComponent class="isImportantComponentCSS"/>

            <form id="workLoadAdder">
                <button id="addButton" class="addButtonCSS" value={addWorkLoadData}>
                    Add Item
                </button>
            </form>

            <form id="workLoadDeleter">
                <button id="deleteButton" class="deleteButtonCSS" value={deleteWorkData}>
                    Delete Item
                </button>
            </form>
        </div>
    }
}