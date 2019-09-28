import React,{useState} from 'react';
import Home from  "./components/home/Home"; 
import './App.css';

const App =()=> {
 
  const [page,setPage]=useState("home");
  
    return(<Home page={page} setPage={setPage}/>);
  
  
}

export default App;
