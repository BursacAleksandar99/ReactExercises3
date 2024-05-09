import './App.css';
import Axios from 'axios';
import { useState, useEffect} from 'react';

function App2() {

    const [name, setName] = useState("");
    // const [predictedAge, setPredictedAge] = useState(0);
    const [predictedAge, setPredictedAge] = useState(null);
    const fatchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictedAge(res.data); 
              // name smo postavili u string koristeci ``!
        })
    }

    return(
        <div className='App'>
            <input placeholder='Ex. Aleksandar...' onChange={(event) => {
                setName(event.target.value);
            }}/>
            <button onClick={fatchData}>Predict Age</button>

            <h1>Name: {predictedAge?.name} </h1>
            <h1>Count: {predictedAge?.count} </h1>
            <h1>Age: {predictedAge?.age} </h1>
        </div>
    );
}

export default App2;