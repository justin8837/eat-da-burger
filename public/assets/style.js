console.log("hello");
$(".save").on("click", function(result) {
  $.ajax({
    url: "/api/save/" + this.id,
    method: "put",
    data: { devour: false }
  }).then(function(end) {
    console.log(end);
  });
});
$(".devour").on("click", function(event) {
  $.ajax({
    url: "/api/burgers/" + this.id,
    method: "put",
    data: { devour: true }
  }).then(function(result) {
    console.log("it works");
  });
});
