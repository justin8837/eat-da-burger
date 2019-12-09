let mysql = require("mysql");
let express = require("express");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burgers")(app);
require("./routes/save")(app);
let data = [
  { name: "Cheeseburger", devour: false, id: 1 },
  { name: "Baconburger", devour: true, id: 2 }
];

app.get("/", function(req, res) {
  res.render("burgerInput", { burgers: data });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
