//imports
import React, { useState, useEffect } from "react";
import TranslateBoolean from '../Functions/translateBoolean';
import getErrorMessage from './ErrorMessages';
import '../CSS/WorkLoadCS.css';

//Component Definition
export default function WorkLoadComponent(){
    const backText = 'BACK';

    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [clas, setClas] = useState('');
    const [description, setDescription] = useState('');
    const [project, setProject] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [message, setMessage] = useState('');
    const [displayOn, setDisplayOn] = useState(false);
    const [displayOff, setDisplayOff] = useState(false);
    const [createPage, setCreatePage] = useState(false);
    const [updatePage, setUpdatePage] = useState(false);

    const [emptyTable, setEmptyTable] = useState(false);
    const [displayData, setDisplayData] = useState(true);
    const [invokeGetWorkLoadData, setInvokeGetWorkLoadData] = useState(true);
    
    const htmlIds = {
        clas: 'clas',
        project: 'project',
        description: 'description',
        dueDate: 'dueDate',
        isImportant: 'isImportant'
    };

    const showItem = (item) => {
        setCurrentItem(item);
        setDisplayData(true);
        setMessage(null);
    };

    const showItems = () => {
        setDisplayData(false);
        setMessage(null);
    }

    const showCreatePage = () => {
        setCreatePage(true);
        setEmptyTable(true);
        setDisplayData(false);
    };

    const showUpdatePage = () => {
        setUpdatePage(true);
        setEmptyTable(true);
        setDisplayData(false);
    };

    const deleteWorkLoadItem = (deleteItem) => {
        setEmptyTable(true);
        setDisplayData(false);

        if(deleteItem !== null){
            for(let i = 0; i < items.length; i++){
                if(items.id === deleteItem.id){
                    items.splice(i, 1);
                }
            }
        }
        else{
            setMessage(getErrorMessage('itemWithNoId'));
        }
        alert({deleteItem} + 'has been deleted from your work load list!');
    };

    const toggleDisplayData = (event) => {
        if(event !== undefined && event.target.innerText === 'Display On'){
            setEmptyTable(false);
            setDisplayData(true);
            setDisplayOn(true);
            setDisplayOff(false);
            return;
        }
        else if(event !== undefined && event.target.innerText === 'Display Off'){
            setEmptyTable(true);
            setDisplayData(false);
            setDisplayOn(false);
            setDisplayOff(true);
            return;
        }
        else {
            setMessage(getErrorMessage('toggleDisplay'));
            setEmptyTable(true);
            setDisplayData(false);
            setDisplayOff(false);
            setDisplayOn(false);
            return;
        }
    };

    const displayEmptyTableMessage = () => {
        if(emptyTable){
            setMessage(getErrorMessage('emptyTable'));
        }
    };

    const submit = async() => {
        const clasHtml = document.getElementById(htmlIds.clas);
        const projectHtml = document.getElementById(htmlIds.project);
        const descriptionHtml = document.getElementById(htmlIds.description);
        const dueDateHtml = document.getElementById(htmlIds.dueDate);
        const isImportantHtml = document.getElementById(htmlIds.isImportant);

        if(!clasHtml || !projectHtml || !descriptionHtml || !dueDateHtml || isImportantHtml){
            setMessage(getErrorMessage('cannotRetrieveHTMLElements'));
            return;
        }

        let id;

        if(currentItem.id){
            id = currentItem.id;
        }
        else{
            const newIdNumber = items.length + 1;
            id= ('item'+newIdNumber);
        }

        const item = {
            id: id,
            clas: clasHtml.value,
            project: projectHtml.value,
            description: descriptionHtml.value,
            dueDate: dueDateHtml.value,
            isImportant: isImportantHtml.value
        }

        if(items.includes(item.id)){
            for(let i = 0; i < items.length; i++){
                if(items[i].id === item.id){
                    items[i] = item;
                }
            }
            alert('Successfully updated ' + item + ' in the work load list!');
        }
        else{
            items.push(item);
            alert('Successfully added ' + item + ' to the work load list!');
        }
    }

    const getWorkLoadData = () => {
        setEmptyTable(true);
        setDisplayData(false);

        const response = [
            {
                id: 'item1',
                clas: 'CSC 391',
                project: 'self REACT project',
                description: 'programming project',
                dueDate: 'August 20th',
                isImportant: true
            },
            {
                id: 'item2',
                clas: 'none',
                project: 'User Permissions Project',
                description: '2021 internship project for the admin portion of HealthIOs portal',
                dueDate: 'August 20th',
                isImportant: true
            },
            {
                id: 'item3',
                clas: 'none',
                project: 'Unity Personal Learning',
                description: 'summer personal learning project',
                dueDate: 'None',
                isImportant: false
            }
        ];

        if(typeof response === 'string'){
            setEmptyTable(true);
            setDisplayData(false);
        }
        else if(typeof response === 'object'){
            setEmptyTable(false);
            setDisplayData(true);
            const rows = response.map(function (itemRep, i) {
                setClas(itemRep.clas);
                setProject(itemRep.project);
                setDescription(itemRep.description);
                setDueDate(itemRep.dueDate);
                setIsImportant(itemRep.isImportant);
                const numOfItems = ++i;
                const itemId = itemRep.id;
                return (
                    <tr className='' key={itemId} onClick={() => showItem(itemRep)}>
                        <td onClick={() => showUpdatePage}>{itemRep.clas}</td>
                        <td onClick={() => showUpdatePage}>{itemRep.project}</td>
                        <td onClick={() => showUpdatePage}>{itemRep.description}</td>
                        <td onClick={() => showUpdatePage}>{itemRep.dueDate}</td>
                        <td onClick={() => showUpdatePage}>{TranslateBoolean(itemRep.isImportant)}</td>
                    </tr>
                );
            });
            const table = (
                <table>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Project</th>
                            <th>Description</th>
                            <th>DueDate</th>
                            <th>IsImportant</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            );
            setItems(table);
        }
    };
    if(invokeGetWorkLoadData){
        getWorkLoadData();
        setInvokeGetWorkLoadData(false);
    }

    return (
        <div>
            <div className='buttons'>
                <button onClick={showCreatePage}>Create Item</button>
                <button onClick={showUpdatePage}>Update Item</button>
                <button>Delete Item</button>
                {!displayOn && !displayOff && !displayData && <button onClick={() => showItems()}>{backText}</button>}
            </div>
            {emptyTable && displayEmptyTableMessage}
            {!emptyTable && items}
            {createPage && (
                <div className=''>
                    <form autoComplete='off' className=''>
                        <label htmlFor={htmlIds.clas}>Class: </label>
                        <input id={htmlIds.clas} />
                        <label htmlFor={htmlIds.project}>Project: </label>
                        <input id ={htmlIds.project} />
                        <label htmlFor={htmlIds.description}>Description: </label>
                        <input id={htmlIds.description} />
                        <label htmlFor={htmlIds.dueDate}>Due Date: </label>
                        <input id={htmlIds.dueDate} />
                        <label htmlFor={htmlIds.isImportant}>Is this item important: </label>
                        <input id={htmlIds.isImportant} />
                    </form>
                    <div className=''>
                        <button onClick={() => submit()}>SUBMIT</button>
                    </div>
                </div>
            )}
            {updatePage && (
                <div className=''>
                    <form autoComplete='off' className=''>
                        <label htmlFor={htmlIds.clas}>Class: </label>
                        <input id={htmlIds.clas} defaultValue={currentItem.clas} />
                        <label htmlFor={htmlIds.project}>Project: </label>
                        <input id ={htmlIds.project} defaultValue={currentItem.project} />
                        <label htmlFor={htmlIds.description}>Description: </label>
                        <input id={htmlIds.description} defaultValue={currentItem.description} />
                        <label htmlFor={htmlIds.dueDate}>Due Date: </label>
                        <input id={htmlIds.dueDate} defaultValue={currentItem.dueDate} />
                        <label htmlFor={htmlIds.isImportant}>Is this item important: </label>
                        <input id={htmlIds.isImportant} defaultValue={currentItem.isImportant} />
                    </form>
                    <div className=''>
                        <button onClick={() => submit()}>SUBMIT</button>
                    </div>
                </div>
            )}
            {!updatePage && !createPage && (<div>
                <button value={displayOn} onClick={(e) => toggleDisplayData(e)}>Display On</button>
                <button value={displayOff} onClick={(e) => toggleDisplayData(e)}>Display Off</button>
            </div>)}
            {message}
        </div>
    );
}

/*
1) Add to package.json as project develops
2) Add error messaging as project develops
3) Test project as project develops
4) Debug project as project develops
5) Develop index.css as project goes on
6) Develop App unit tests - create more if App component expands
7) Develop WorkLoadComponent unit tests - create button test, update button test, delete button test
8) Create Page & Functionality
9) Update Page & Functionality
10) Delete Item Functionality
11) Clean-up after project is done
*/