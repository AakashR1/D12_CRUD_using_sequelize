const { employee } = require('../models/dbconfig');
const db = require('../models/dbconfig');

const Employee = db.employee

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
        const data = await Employee.findAll(
        //     {
        //     attributes:[
        //         "first_name",
        //         "date_of_joining"
        //     ]
        // }
        );
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

module.exports = {
    addEmployee,
    getallEmployee,
    getOneProduct,
    updateEmployee,
    deleteEmployee

}