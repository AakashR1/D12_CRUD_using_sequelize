const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');

router.post('/addEmployee',employeeController.addEmployee);
router.get('/getAllEmployee',employeeController.getallEmployee);
router.get('/getEmployee/:emp_id',employeeController.getOneProduct);
router.patch('/updateEmployee/:emp_id',employeeController.updateEmployee);
router.delete('/deleteEmployee/:emp_id',employeeController.deleteEmployee);
router.get('/getOrderedEmployeeDes',employeeController.getOrderedEmployeeDes);
router.get('/getOrderedEmployeeAsc',employeeController.getOrderedEmployeeAsc);
router.get('/getRequireFielEmployee',employeeController.RequireFieldEmployee);
router.get('/employeeBasedDep',employeeController.employeeBasedDep)
router.get('/joinedPastSixMonths',employeeController.joinedpastSixMonths)
// //association
// router.get('/associatedEmpWithDep',employeeController.associatedEmpWithDep);


module.exports = router;