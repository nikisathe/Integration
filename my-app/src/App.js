import React from 'react';
import { BrowserRouter,Route, Routes  } from 'react-router-dom';
 import Login from './Components/Login';
import StudentProfile from './Components/StudentProfile ';
import Parent from './Components/Parent';
import Profile from './Components/Profile';
import Teacher from './Components/Teacher';
import Loader from './Components/Loader';


function App() { 
  return (
<>
    <BrowserRouter>
   
    <Routes>
        <Route  path="/Login" element={<Login/>}/>
        <Route path="/" element={<Loader/>}/>
        <Route  path="/Student" element={<StudentProfile/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route  path="/Parent" element={<Parent/>}/>
        <Route path ="/teacher" element={<Teacher/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
