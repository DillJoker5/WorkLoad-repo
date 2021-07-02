//imports
import WorkLoadComponent from "../Components/WorkLoadComponent";
import { getErrorMessage } from '../Components/ErrorMessages';
import '../CSS/App.css';

//Component definition
export default function App() {

    return(
        <div class="main-div">
            <h1>WorkLoad List</h1>
            <WorkLoadComponent />
        </div>
    );
}