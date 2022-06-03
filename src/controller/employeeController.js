const { employee,department } = require('../models/dbconfig');
const db = require('../models/dbconfig');
const {Op} = require('sequelize');
const Employee = db.employee
const Department = db.department

const addEmployee  = async (req,res)=>{
    try {
        await Employee.create(req.body);
        res.send('Employee added successfully....');

    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

const getallEmployee  = async (req,res)=>{
    try {
        const data = await Employee.findAll();
        res.send(data);
        
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

const getOneProduct = async(req,res)=> {
    try {
        let employee = await Employee.findOne({where:{emp_id:req.params.emp_id}});
        res.send(employee)
    } catch (error) {
        res.send(error)
    }
}

const updateEmployee = async(req,res)=>{
    try {
        await Employee.update(req.body,{where:{emp_id : req.params.emp_id}})
        res.send('updated.....')
    } catch (error) {
        console.log(error);
        res.send(error.message)
    }
}

const deleteEmployee = async(req,res)=>{
    try {
            await Employee.destroy({where:{emp_id:req.params.emp_id}})
            res.send("Employee deleted....");
    } catch (error) {

        console.log(error);
        res.send(error)
    }
}

const getOrderedEmployeeDes = async(req,res)=>{
    try {
        const data = await Employee.findAll({
            attriburte:["first_name", "last_name"],
            order:[
                ["first_name","DESC"],
                ["last_name","DESC"]
                ]
        })
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const getOrderedEmployeeAsc = async(req,res)=>{
    try {
        const data = await Employee.findAll({
            attriburte:["first_name", "last_name"],
            order:[
                ["first_name","ASC"],
                ["last_name","ASC"]
                ]
        })
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const RequireFieldEmployee  = async (req,res)=>{
    try {
        const data = await Employee.findAll(
            {
            attributes:[
                "first_name",
                "last_name",
                "date_of_joining"
            ]
        }
        );
        res.send(data);
        
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

// const associatedEmpWithDep  = async (req,res)=>{
//     try {
//         const data = await Employee.findAll({include:Department});
//         res.send(data);
        
//     } catch (error) {
//         res.send(error)
//         console.log(error);
//     }
// }

const employeeBasedDep  = async (req,res)=>{
    try {
        const data = await Employee.findAll({attributes:[
            "department",
            "first_name"
        ]});

        res.json(data);
        
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

const joinedpastSixMonths  = async (req,res)=>{
    try {
        let today = new Date().toISOString().slice(0, 10);
         today = today.split('-');
        let SixMonthAgoDate

        if(today[1]-6 <= 0 ){
            console.log('here');
             SixMonthAgoDate = `${today[0]-1}-${12+(today[1]-6)}-${today[2]}`
        }
        else{
             SixMonthAgoDate = `${today[0]}-${today[1]-6}-${today[2]}}`
        }

        const data = await Employee.findAll({
            where: {
                date_of_joining: {
                [Op.gte]: SixMonthAgoDate 
              }
            }
          })
        
        res.json(data);
        
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

module.exports = {
    addEmployee,
    getallEmployee,
    getOneProduct,
    updateEmployee,
    deleteEmployee,
    getOrderedEmployeeDes,
    getOrderedEmployeeAsc,
    RequireFieldEmployee,
    employeeBasedDep,
    joinedpastSixMonths
    // associatedEmpWithDep
}