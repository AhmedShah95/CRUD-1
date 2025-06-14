import React from 'react'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../User'
import CreateUser from '../CreateUser'
import UpdateUser from '../UpdateUser'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<User/>}/>  
            <Route path = '/create' element = {<CreateUser/>}/> 
            <Route path = '/update' element = {<UpdateUser/>} /> 
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
