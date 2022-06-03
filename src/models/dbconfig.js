const dotenv = require('dotenv').config();
const env = dotenv['parsed']['NODE_ENV'];
const config = require('../config/dbConfig.json')[env];

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(config.database, config.user, config.password, config);
const connectToDB = async () => {
    try {
        await sequelize.authenticate()
        // .then(()=>{
        console.log('Connected....');
        // })
        // .catch(err=>{
        //     console.log(err);
        // })

    } catch (error) {
        console.log(error);
    }
}

connectToDB()


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('./EmployeeModel')(sequelize, DataTypes);
db.department = require('./departmentModel')(sequelize, DataTypes);

// db.department.hasMany(db.employee,{foreignKey:"department"});
// db.employee.belongsTo(db.department,{foreignKey:"department"});

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('sync is done!');
    })

module.exports = db