//imports
import { displayWorkLoadData } from './DisplayWorkData';
import { ProjectComponent } from './Components/WorkLoadClassComponent';
import { DueDateComponent } from './Components/WorkLoadDueDateComponent';
import { ClassComponent } from './Components/WorkLoadClassComponent';
import { DescriptionComponent } from './Components/WorkLoadDescriptionComponent';
import { IsImportantComponent } from './Components/WorkLoadIsImportantComponent';
import { workLoadDB } from '../WorkLoadJSRe';

//Function Definition
export const addWorkLoadData = (event) => {
    event.preventDefault();

    const newWorkLoadItem = {

    };

    if(!newWorkLoadItem) {
        //console.log(error.message); Create Error Message
        return false;
    }

    //open workload database
    const transaction = workLoadDB.objectStore(['workload_os'], 'readwrite');

    if(!transaction) {
        //console.log(error.message); Create Error Message
        return false;
    }

    const objectStore = transaction.objectStore('workload_os');

    if(!objectStore) {
        //console.log(error.message); Create Error Message
        return false;
    }

    const addRequest = objectStore.add(newWorkLoadItem);

    if(!addRequest) {
        //console.log(error.message); Create Error Message
        return false;
    }

    addRequest.onsuccess = () => {
        document.getElementById(event.ClassComponent.id).value = "";
        document.getElementById(event.ProjectComponent.id).value = "";
        document.getElementById(event.DescriptionComponent.id).value = "";
        document.getElementById(event.DueDateComponent.id).value = "";
        document.getElementById(event.IsImportantComponent.id).value = "";
    }

    transaction.oncomplete = () => {
        displayWorkLoadData();
        //console.log('Added an element to the database'); Only needed for testing
    }

    transaction.onerror = () => {
        //console.log(console.error.message); Create Error Message
        return false;
    }

    return true;
}