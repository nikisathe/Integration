import React from 'react';
import { BrowserRouter,Route, Routes  } from 'react-router-dom';
 import Login from './Components/Login';
import StudentProfile from './Components/StudentProfile ';
import Parent from './Components/Parent';
import Profile from './Components/Profile';


function App() { 
  return (
<>
    <BrowserRouter>
   
    <Routes>
        <Route  path="/" element={<Login/>}/>
        <Route  path="/Student" element={<StudentProfile/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route  path="/Parent" element={<Parent/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
