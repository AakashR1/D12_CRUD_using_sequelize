const express = require('express');
const router = express.Router();
const departmentcontroller = require('../controller/departmentController');

router.post('/addDepartment',departmentcontroller.addDepartment);
router.get('/getAllDepartment',departmentcontroller.getallDepartment);
router.get('/getDepartment/:department_id',departmentcontroller.getOneDepartment);
router.patch('/updateDepartment/:department_id',departmentcontroller.updateDepartment);
router.delete('/deleteDepartment/:department_id',departmentcontroller.deleteDepartment);





module.exports = router;