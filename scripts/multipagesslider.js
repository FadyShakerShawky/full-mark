$("#trendinglink").on("click", function () {
  $("#trending").fadeIn(1500);
  $("#popular").addClass("d-none");
  $("#trending").removeClass("d-none");
  $("#popular").addClass("d-none");
  $("#trendinglink").addClass("visited");
  $("#popularlink").removeClass("visited");
});
$("#popularlink").on("click", function () {
  $("#popular").fadeIn(1500);
  $("#trending").addClass("d-none");
  $("#popular").removeClass("d-none");
  $("#trending").addClass("d-none");
  $("#popularlink").addClass("visited");
  $("#trendinglink").removeClass("visited");
});
