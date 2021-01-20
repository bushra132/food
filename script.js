$(document).ready(function () {
  var Icons = $(".section-1-icons").children();
  var Icon = $(".section-1-icons").children().first();
  var i = 0;

  setInterval(function () {
    Icon.removeClass("change");

    i++;
    Icon = $(".section-1-icons").children().eq(i);
    if (i > Icons.length - 1) {
      Icon = $(".section-1-icons").children().first();
      i = 0;
    }
    Icon.addClass("change");
  }, 4000);

  $(".menu").click(function () {
    $(this).toggleClass("change");
    $(".navbar").toggleClass("change");
  });

  // var Icons = $(".section-1-icons").children();
  // var Icon = $(".section-1-icons").children().first();
  // var i = 0;

  // $("#btn-n").on("click", function(){
  //   Icon.removeClass("change");

  //   i++
  //   Icon= $(".section-1-icons").children().eq(i);
  //   if (i > Icons.length-1) {
  //   Icon = $(".section-1-icons").children().first();
  //   i=0;
  //   }
  //   Icon.addClass("change");
  // });

  // $("#btn-p").on("click", function(){
  //   Icon.removeClass("change");

  //   i--
  //   Icon= $(".section-1-icons").children().eq(i);
  //   if (i > Icons.length-1) {
  //   Icon = $(".section-1-icons").children().first();
  //   i=0;
  //   }
  //   Icon.addClass("change");
  // });
});
