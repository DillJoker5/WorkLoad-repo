//imports
import { ProjectComponent } from './Components/WorkLoadClassComponent';
import { DueDateComponent } from './Components/WorkLoadDueDateComponent';
import { ClassComponent } from './Components/WorkLoadClassComponent';
import { DescriptionComponent } from './Components/WorkLoadDescriptionComponent';
import { IsImportantComponent } from './Components/WorkLoadIsImportantComponent';
import { addWorkLoadData } from './Functions/AddWorkLoadData';
import { deleteWorkData } from './Functions/DeleteWorkData';

//database where I will keep all of my workload items
export let workloadDB;

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
            <h1>WorkLoad List</h1>
            <ul id="workLoadList">
                <ClassComponent className="classComponentCSS" id={this.ClassComponent.id}/>
            
                <ProjectComponent className="projectComponentCSS" id={this.ProjectComponent.id}/>

                <DescriptionComponent className="descriptionComponentCSS" id={this.DescriptionComponent.id}/>

                <DueDateComponent className="dueDateComponentCSS" id={this.DueDateComponent.id}/>

                <IsImportantComponent className="isImportantComponentCSS" id={this.IsImportantComponent.id}/>
            </ul>
            <h2>Add an Item</h2>
            <form id="workLoadAdder">
                <button id="addButton" className="addButtonCSS" value={addWorkLoadData}>
                    Add Item
                </button>
            </form>
            <h2>Delete an Item</h2>
            <form id="workLoadDeleter">
                <button id="deleteButton" className="deleteButtonCSS" value={deleteWorkData}>
                    Delete Item
                </button>
            </form>
        </div>
    }
}