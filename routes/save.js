module.exports = function(app, orm) {
  app.post("/api/burgers", function(req, res) {
    // console.log(req);
    let name = req.body.burgerName;
    orm.create(name, function(err, result) {
      res.status(200);
    });
  });
};
