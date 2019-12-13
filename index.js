let express = require("express");
var exphbs = require("express-handlebars");
let orm = require("./config/orm");
var app = express();
app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/burger")(app, orm);
require("./routes/save")(app, orm);
// let data = [
//   { name: "Cheeseburger", devour: false, id: 1 },
//   { name: "Baconburger", devour: true, id: 2 }
// ];

app.get("/", function(req, res) {
  orm.all(function(data) {
    res.render("burgerInput", { burgers: data });
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
