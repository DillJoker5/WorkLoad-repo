const ErrorMessage = {
    toggleDisplay: 'Something went wrong in toggling the display!',
    emptyTable: 'Table is empty. Please add some items to the WorkLoad List we know you have stuff to do!',
    itemWithNoId: 'There is no ID attached to this item! Please fix it by tonight',
    cannotRetrieveHTMLElements: 'Error retrieving html elements. Please refresh the page!',
    failedAddItem: 'Failed to add a workload item to the database.',
    failedDatabase: 'Failed to create the database. Please reload the page or submit a ticket!',
};

export default function getErrorMessage(errorMessageName){
    if(errorMessageName === 'toggleDisplay' || errorMessageName === 'emptyTable' || errorMessageName === 'itemWithNoId' || errorMessageName === 'cannotRetrieveHTMLElements'){
        if(ErrorMessage[errorMessageName]){
            return ErrorMessage[errorMessageName];
        }
        return;
    }
    else{
        return;
    }
}