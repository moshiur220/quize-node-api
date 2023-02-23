require("dotenv").config();
const { Sequelize } = require("sequelize");
//*************** Database connection ********************/
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

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
