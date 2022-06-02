const { department } = require('../models/dbconfig');
const db = require('../models/dbconfig');

const Department = db.department

const addDepartment  = async (req,res)=>{
    try {
        await Department.create(req.body);
        res.send('Department added successfully....');
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const getallDepartment  = async (req,res)=>{
    try {
        const data =await Department.findAll();
        res.send(data);
        
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

const getOneDepartment = async(req,res)=> {
    try {
        console.log(req.params.department_id);
        let data = await Department.findOne({where:{department_id:req.params.department_id}});
        
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const updateDepartment = async(req,res)=>{
    try {
        await Department.update(req.body,{where:{department_id:req.params.department_id}})
        res.send('updated.....')
    } catch (error) {
        console.log(error);
        res.send(error.message)
    }
}

const deleteDepartment = async(req,res)=>{
    try {
            await Department.destroy({where:{department_id:req.params.department_id}})
            res.send("Department deleted....");
    } catch (error) {

        console.log(error);
        res.send(error)
    }
}

module.exports = {
    addDepartment,
    getallDepartment,
    getOneDepartment,
    updateDepartment,
    deleteDepartment
}