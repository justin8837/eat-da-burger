console.log("hello");
$("#save").on("click", function(result) {
  let burgerName = $("#burgerName").val();
  $.ajax({
    url: "/api/burgers",
    method: "post",
    data: { burgerName }
  }).then(function(end) {
    console.log(end);
    window.location.reload();
  });
});
$(".devour").on("click", function(event) {
  $.ajax({
    url: "/api/burgers/" + this.id,
    method: "put",
    data: { devour: true }
  }).then(function(result) {
    console.log("it works");
    window.location.reload();
  });
});
