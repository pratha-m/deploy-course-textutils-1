import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './myApp.css';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setDarkMode]=useState('light'); //whether the dark mode is enabled or not
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
       setAlert({
         msg:message,
         type:type
       })
       setTimeout(()=>{
         setAlert(null)
       },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setDarkMode("dark");
      document.body.style.backgroundColor="grey"
      document.body.style.color="white"
      showAlert("Dark mode has been enabled","success")
      document.title="textUtils-dark mode enabled"
    }
    else{
      setDarkMode("light");
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Light mode has been enabled","success")
      document.title="textUtils-light mode enabled"
    }
  }
  return (
    <Router>
    <div className="container">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <div>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your opinion about website" mode={mode}  showAlert={showAlert}/>}/>       
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes> 
      </div>
    </div> 
    </Router>
);
}
export default App;
