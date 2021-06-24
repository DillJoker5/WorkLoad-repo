//imports
import React, { useState, useEffect } from "react";
import { TranslateBoolean } from '../Functions/translateBoolean';
import { getErrorMessage } from './ErrorMessages';

//Component Definition
export default function WorkLoadComponent(){
    const [items, setItems] = useState([]);
    const [clas, setClas] = useState('');
    const [description, setDescription] = useState('');
    const [project, setProject] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [message, setMessage] = useState('');
    const [displayOn, setDisplayOn] = useState(false);
    const [displayOff, setDisplayOff] = useState(false);

    const [emptyTable, setEmptyTable] = useState(false);
    const [displayData, setDisplayData] = useState(true);

    const addWorkLoadItem = () => {
        setEmptyTable(true);
        setDisplayData(false);
    };

    const deleteWorkLoadItem = (deleteItemName) => {
        setEmptyTable(true);
        setDisplayData(false);
    };

    const updateWorkLoadItem = (updateItemName) => {
        setEmptyTable(true);
        setDisplayData(false);
    };

    const toggleDisplayData = (event) => {
        if(event.target.value === displayOn){
            setEmptyTable(false);
            setDisplayData(true);
            setDisplayOn(true);
            setDisplayOff(false);
            return;
        }
        else if(event.target.value === displayOff){
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

    useEffect(() => {
        const getWorkLoadData = () => {
            setEmptyTable(true);
            setDisplayData(false);

            const response = [{
                clas: 'CSC 391',
                description: 'programming project',
                project: 'self REACT project',
                dueDate: 'August 20th',
                isImportant: true
            }];

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
                    return (
                        <tr id={i}>
                            <td>{itemRep.clas}</td>
                            <td>{itemRep.project}</td>
                            <td>{itemRep.description}</td>
                            <td>{itemRep.dueDate}</td>
                            <td>{TranslateBoolean(itemRep.isImportant)}</td>
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
    }, []);

    return (
        <div>
            <div className='buttons'>
                <button className='createButton' onClick={addWorkLoadItem}>Create Item</button>
                <button className='updateButton' onClick={updateWorkLoadItem}>Update Item</button>
                <button className='deleteButton' onClick={deleteWorkLoadItem}>Delete Item</button>
            </div>
            <h1>WorkLoad List</h1>
            {emptyTable && displayEmptyTableMessage}
            {!emptyTable && displayData && getWorkLoadData}
            <div className='buttons'>
                <button value={displayOn} className='displayDataButton' onClick={toggleDisplayData}>Display On</button>
                <button value={displayOff} className='displayDataButton' onClick={toggleDisplayData}>Display Off</button>
            </div>
            {message}
        </div>
    );
}

/*
1) Add CSS to this component
2) Develop WorkLoadJSRE.jsx once components, functions, and css is done
3) Run this project
4) Add error messaging as project develops
5) Develop addWorkLoadItem
6) Develop updateWorkLoadItem
7) Develop deleteWorkLoadItem
*/