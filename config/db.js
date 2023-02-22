const { Sequelize } = require("sequelize");

//*************** Database constrain ********************/
const DB_HOST = "localhost";
const DB_USER = "root";
const DB_PASSWORD = "mos12345";
const DB_NAME = "mcq";

//*************** Database connection ********************/
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

module.exports = sequelize;

// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   dialect: "mysql",
// });
// async function run() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// run();
// module.exports = sequelize;
// export default sequelize;
