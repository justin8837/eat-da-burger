let mysql = require("mysql");
let env = require("dotenv");
//create connection to the mysql database
env.config();
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.user,
    password: process.env.password,
    database: "odjcyugxhnkoduzb"
  });
}
connection.connect();

connection.connect(function(err) {
  if (err) throw err;
  console.log("Currently connected.");
});

module.exports = connections;
