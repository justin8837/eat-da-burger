let connection = require("./connection");
//create orm for selecting all, updating one, and inserting one
let orm = {
  all: function(cb) {
    connection.query("SELECT * FROM burger", function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  update: function(id, callb) {
    connection.query(
      "UPDATE burger SET devour = true WHERE id = " + id,
      function(err, res) {
        if (err) throw err;
        callb(res);
      }
    );
  },
  create: function(burgerName, cb) {
    connection.query(
      "INSERT INTO burger (burgerName) VALUES ('" + burgerName + "')",
      function(err, res) {
        if (err) throw err;
        cb(res);
      }
    );
  }
};

module.exports = orm;
