import './App.css';
import Axios from 'axios';
import { useState, useEffect} from 'react';

function Exercise() {

    const [onScreen, setOnScreen] = useState("");
    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) =>{
            setOnScreen(res.data[0].excuse); //[0] jer se uzima prvi element niza objekata!
        });
        
    }

    

    return (
        <div className='App'>
                <h1>Generate An Excuse</h1>
                <button onClick={() =>fetchExcuse("party")}>Party</button>
                <button onClick={() =>fetchExcuse("family")}>Family</button>
                <button onClick={() =>fetchExcuse("office")}>Office</button>

                <p> {onScreen}</p>
        </div>
    );
}

export default Exercise;
