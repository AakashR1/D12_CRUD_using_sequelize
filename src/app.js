require("dotenv").config()
const express = require('express');
const app = express();
const cors = require('cors');
const employeeRouter = require('./routes/employeeRouter');
const departmentRouter = require('./routes/departmentRouter');

let corOptions = {
    origin:"https:localhost:8081"
}

app.use(cors(corOptions));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/employee',employeeRouter);
app.use('/department',departmentRouter);

PORT = process.env.PORT;
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server is listening at post ${PORT}`);
})