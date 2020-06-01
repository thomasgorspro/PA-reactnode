// import sequelize from "../../lib/sequelize";
// import { DataTypes, Model } from "sequelize";
// import bcrypt from "bcryptjs";
// class User extends Model {}
// User.init(
//   {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: {
//           msg: "Email non valide"
//         }
//       }
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     firstname: DataTypes.STRING,
//     lastname: DataTypes.STRING,
//     confirmed: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: true,
//     },
//   },
//   {
//     sequelize,
//     modelName: "User",
//     paranoid: true,
//   }
// );


// User.addHook('beforeCreate', async (user, options) => {
//   const salt = await bcrypt.genSalt();
//   user.password = await bcrypt.hash(user.password, salt);
// });

// // Schema update
// User.sync({
//   force: true,
// });

// export default User;
