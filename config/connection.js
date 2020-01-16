let mysql = require("mysql");
let env = require("dotenv");
//create connection to the mysql database
env.config();
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.user,
  password: process.env.password,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Currently connected.");
});

module.exports = connections;
