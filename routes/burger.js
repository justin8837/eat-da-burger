// let orm = require("../config/orm");
let db = require("../models");
module.exports = function(app) {
  app.put("/api/burgers/:id", function(req, res) {
    let id = req.params.id;
    db.Burger.update(
      {
        devour: true
      },
      { where: { id: id } }
    ).then(function(data) {
      res.status(200);
    });
    // orm.update(id, function(err, result) {
    //   res.status(200);
    // });
  });
  app.post("/api/burgers", function(req, res) {
    // console.log(req);
    let name = req.body.burgerName;
    db.Burger.create({ burgerName: name }).then(function(data) {
      res.status(200);
    });
    // orm.create(name, function(err, result) {
    //   res.status(200);
    // });
  });
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      res.render("burgerInput", { burgers: data });
      console.log(data);
    });
  });
};
