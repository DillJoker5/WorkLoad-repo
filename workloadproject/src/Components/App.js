//imports
import WorkLoadComponent from "../Components/WorkLoadComponent";
//import { getErrorMessage } from '../Components/ErrorMessages';
import '../CSS/App.css';

//Component definition
export default function App() {

    return(
        <div className="main-div">
            <h1>WorkLoad List</h1>
            <WorkLoadComponent />
            <footer><a href='https://www.linkedin.com/in/dylan-chirigotis-5746501b8/'>My LinkedIn Profile</a></footer>
        </div>
    );
}