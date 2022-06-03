

module.exports = (sequelize, DataTypes)=>{
    const Department = sequelize.define("Department",{
        department_id :{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        department_name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true 
        }
    });
    // Department.associate =(models) =>{
    //     Department.hasMany(models.Employee,{
    //         onDelete:"cascade"
    //     });
    // }

    return Department;
};
