import React, { useState } from 'react'
import axios from 'axios'
const CreateUser = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/createUser', {
            name: name,
            email: email,
            password: password
        })
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit ={Submit}>
          <h2>Add User</h2>
          
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" 
            onChange={(e)=> setName(e.target.value)}/>
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control" 
            onChange={(e)=> setEmail(e.target.value)}/>
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="Password" placeholder="Enter password" className="form-control" 
            onChange={(e)=> setPassword(e.target.value)}/>
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
