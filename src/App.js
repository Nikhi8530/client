import './App.css';
import Login from './Login';
import MyPets from './MyPets';
import Pets from './Pets';
import Profile from './Profile';
import MyNavBar from './MyNavBar';
import React from 'react';
import Request from './Request';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import './AddPet.css';
import AddPet from './AddPet'
function App() {
  return (
  <div className="app-container">
      <BrowserRouter>
        <MyNavBar />
        <div className="content-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/mypets' element={<MyPets />} />
          <Route path='/request' element={<Request />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addpet' element={<AddPet />} />
          <Route path='/Registration' element={<Registration/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;