const {Sequelize} = require("sequelize")
const db = require("../config/database")
const { DataTypes } = Sequelize;


const formMaster = db.define("form_masters", {
    template: {
        type: DataTypes.TEXT, 
        allowNull: false,
    },
    step_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    fields: {
        type: DataTypes.TEXT, 
        allowNull: false,
    },
    rules: {
        type: DataTypes.TEXT, 
        allowNull: true
    },
    preference_id: {
        type: DataTypes.INTEGER, 
        allowNull: true
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false
  });

// Create the tables
// (async () => {
//     // await db.sync();
//     await formMaster.sync()
//     .then(() => {
//         console.log('Form Master table created successfully!');
//     })
//     .catch((error) => {
//         console.error('Unable to create table : ', error);
//     });
// })();

module.exports = formMaster
