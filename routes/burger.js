module.exports = function(app, orm) {
  app.put("/api/burgers/:id", function(req, res) {
    let id = req.params.id;
    orm.update(id, function(err, result) {
      res.status(200);
    });
  });
};
