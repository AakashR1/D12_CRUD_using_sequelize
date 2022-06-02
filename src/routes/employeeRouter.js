const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');

router.post('/addEmployee',employeeController.addEmployee);
router.get('/getAllEmployee',employeeController.getallEmployee);
router.get('/getEmployee/:emp_id',employeeController.getOneProduct);
router.patch('/updateEmployee/:emp_id',employeeController.updateEmployee);
router.delete('/deleteEmployee/:emp_id',employeeController.deleteEmployee);


module.exports = router;