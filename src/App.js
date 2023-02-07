 
 import './App.css';
 import Navbar from './Components/Navbar';
 import TextForm from './Components/TextForm';
 import About from './Components/About';
 import React, {useState} from 'react'
import Alert from './Components/Alert';
//import {
 // BrowserRouter as Router,
 // Routes, // instead of "Switch"
 // Route,
 // Link
//} from "react-router-dom";
function App() {
  //wheather dark  mode us enable or not
   const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);
   const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
         
      } );
      setTimeout(()=>{
        setAlert(null);
      } ,1500);
   }
   const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
     document.body.style.backgroundColor='#042743';
   showAlert("Dark mode has been enable","success");
 //  document.title='TextUtils-Dark Mode';
 /*  setInterval(() => {
    document.title='TextUtils-is amazing mode';
   }, 2000);
   setInterval(() => {
    document.title='Install-TextUtils';
   }, 1500); */
  }
  else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success") ;
     // document.title='TextUtils-Light Mode';
  }
   }
  return (
   <>
    {/* <Navbar title="TextUtils" About="About"/>  */}
     
  <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
     
  <div className="container my-3" >
   <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter Character Counter,Remove extra Spaces" mode={mode}/>
   <About mode={mode}/>
  {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>*/}
  </div> 
   
   </>
  );
  
}

export default App;