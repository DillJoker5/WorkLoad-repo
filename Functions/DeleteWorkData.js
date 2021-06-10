//imports
import { ProjectComponent } from './Components/WorkLoadClassComponent';
import { DueDateComponent } from './Components/WorkLoadDueDateComponent';
import { ClassComponent } from './Components/WorkLoadClassComponent';
import { DescriptionComponent } from './Components/WorkLoadDescriptionComponent';
import { IsImportantComponent } from './Components/WorkLoadIsImportantComponent';
import { workLoadDB } from '../WorkLoadJSRe';
import { displayWorkData } from './DisplayWorkData';

//Function Definition
export const deleteWorkData = (event) => {
    const workLoadItemID = Number(event.target.parentNode.getAttribute('data-pswd-id')); //Change later on

    if(!workLoadItemID) {
        //console.log(error.message); Create Error Message
    }

    //open workload database
    const transaction = workLoadDB.transaction(['workload_os'], 'readwrite');

    if(!transaction) {
        //console.log(error.message); Create Error Message
        return false;
    }

    const objectStore = transaction.objectStore('workload_os');

    if(!objectStore) {
        //console.log(error.message); Create Error Message
        return false;
    }

    const deleteRequest = objectStore.delete(workLoadItemID);

    if(!deleteRequest) {
        //console.log(error.message); Create Error Message
        return false;
    }

    transaction.oncomplete = () => {
        alert('WorkLoad Item deleted: ', workLoadItemID);
        displayWorkData();
    }
}