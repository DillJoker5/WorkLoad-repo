//imports
import React, { useState, useEffect } from "react";


//Component Definition
export default function WorkLoadComponent(){
    const [items, setItems] = useState([]);
    const [clas, setClas] = useState('');
    const [description, setDescription] = useState('');
    const [project, setProject] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isImportant, setIsImportant] = useState(false);

    const [emptyTable, setEmptyTable] = useState(false);
    const [displayData, setDisplayData] = useState(true);

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
                            <td>{itemRep.isImportant}</td>
                        </tr>
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
        }, [setEmptyTable, setDisplayData, setClas, setProject, setDescription, setDueDate, setIsImportant, setItems]);

    return (

    );
}

/*
1) Return statement in this component
    1.1) Add Toggle Display Button
    1.2) Add Create Item Button
    1.3) Add Update Item Button
    1.4) Add Delete Item Button
2) Add CSS to this component
3) Redo outside jsx file
4) Run this project
5) Use TranslateBoolean Function
6) Add signature to outside jsx file
7) Fix errors & add error messaging to stuff
*/