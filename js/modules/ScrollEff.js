export default function ScrollEff() {
  let $window = $(window);
  function animate(el, className) {
    $(el).each(function () {
      let el = this;
      if (
        $(el).offset().top <
        $window.scrollTop() + ($window.height() / 10) * 8
      ) {
        $(el).addClass(className);
      }
    });
  }

  function bindImageAnimations() {
    animate(".item-scroll-js", "is-inview");

    $window.on("scroll", function () {
      animate(".item-scroll-js", "is-inview");
    });
  }
  bindImageAnimations();
}
