const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require("./model/user")




const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/CRUD")
    app.post("/createUser",(req, res)=>{
        UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err =>res.json(err))
    } )

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})