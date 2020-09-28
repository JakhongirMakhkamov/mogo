
var header = $("#header");
var nav = $("nav");
var navToggle = $("#navToggle");
var scrollPosition = $(window).scrollTop();

$(window).on("scroll load resize", function() {

  scrollPosition = $(this).scrollTop();
  if (scrollPosition > 0) {

    header.addClass("fixed");

  }

  else {

    header.removeClass("fixed");

  }

});

navToggle.on("click", function(event) {

  event.preventDefault();
  nav.toggleClass("show");
  navToggle.toggleClass("burger-pressed");

});

$("a").on("click", function(event) {

  if (this.hash !== "") {

    event.preventDefault();
    var hash = this.hash;
    nav.removeClass("show");
    navToggle.removeClass("burger-pressed");
    $("html, body").animate({

      scrollTop: $(hash).offset().top - 60

    }, 800);

  }

});

$("[data-collapse]").on("click", function(event) {

  event.preventDefault();
  var blockId = $(this).data("collapse");
  $(this).toggleClass("active");


})
