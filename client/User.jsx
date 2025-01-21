import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const [users, setUsers] = useState([{
        Name: "Ahmed" ,  Email : "info.ahmedsdev@gmail.com" , Password : "05122001" ,  
    }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <Link to = "/create" className='btn btn-success'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            users.map((user)=>{
                                return<tr>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Password}</td>
                                <td>
                                <Link to = "/update" className='btn btn-primary'>Update</Link>
                                    <button>Delete</button>
                                </td>
                                </tr>
                            })
                        }
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default User
