const {Sequelize} = require("sequelize")
const db = require("../config/database")
const { DataTypes } = Sequelize;
const bcrypt = require("bcrypt");

const Users = db.define("users", {
    name: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
            notEmpty: {
              args: [true],
              msg: "Please enter a name",
            },
            notNull: {
              args: [true],
              msg: "Please enter a name",
            },
        },
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        notEmpty: true,
        validate: {
            isEmail: true
        },
        unique: {
           args: 'email',
           msg: 'The email is already taken!'
        }
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
            len: {
              args: [8],
              msg: "Minimum password length is 8 characters",
            },
            notEmpty: {
              args: [true],
              msg: "Please enter a password",
            },
            notNull: {
              args: [true],
              msg: "Please enter a password",
            },
        },
    },
    mobile: {
        type: DataTypes.BIGINT, 
        allowNull: true
    },
    role_type: {
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
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    timestamps: false,
    hooks: {
        beforeCreate: async (user) => {
         if (user.password) {
          const salt = await bcrypt.genSalt();
          user.password = bcrypt.hashSync(user.password.toString(), salt);
         }
        },
        beforeUpdate:async (user) => {
         if (user.password) {
          const salt = await bcrypt.genSalt();
          user.password = bcrypt.hashSync(user.password.toString(), salt);
         }
        }
       }
  });

// Create the tables
// (async () => {
//     // await db.sync();
//     await Users.sync()
//     .then(() => {
//         console.log('Users table created successfully!');
//     })
//     .catch((error) => {
//         console.error('Unable to create table : ', error);
//     });
// })();

module.exports = Users;
