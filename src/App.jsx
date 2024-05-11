import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import React,{useState} from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
function App() {

  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);


  const showalert = (message,type)=>{
    setalert({
      message: message,
      type: type
    });
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
    document.body.style.backgroundColor='#242a3e';
      showalert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
    }
  };
      //Router
  const router = createBrowserRouter([{
    path: "/home",
    element:  <><Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
                <Alert alert={alert}/>
                <div className="container">
                  <Textform textArea="Enter the text to analyze" mode={mode} alert={showalert}/>
                </div></>
},
{
  path: "/about",
  element:  <><Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
              <Alert alert={alert}/>
              <div className="container">
                <About mode={mode} alert={showalert}/>
              </div></>
}
]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
