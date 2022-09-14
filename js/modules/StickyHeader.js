export default function StickyHeader() {
  const header = $(".header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      header.addClass("is-sticky");
      $("body").addClass("is-scroll");
    } else {
      header.removeClass("is-sticky");
      $("body").removeClass("is-scroll");
    }
  });
}
