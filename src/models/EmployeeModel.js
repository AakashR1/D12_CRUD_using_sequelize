

module.exports = (sequelize, DataTypes)=>{
    const Employee = sequelize.define("Employee",{
        emp_id :{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        date_of_joining:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        dob:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        department:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true 
        },
        password:{ 
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Employee;
};
