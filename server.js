let express = require("express");
var exphbs = require("express-handlebars");
// let orm = require("./config/orm");
let db = require("./models");
var app = express();
app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/burger")(app);
// require("./routes/save")(app, orm);

// app.get("/", function(req, res) {
//   orm.all(function(data) {
//     res.render("burgerInput", { burgers: data });
//   });
// });

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
