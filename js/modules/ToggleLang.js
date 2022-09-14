export default function ToggleLang() {
  const langSelect = $(".lang-select");
  if (langSelect) {
    langSelect.on("click", function () {
      langSelect.toggleClass("is-active");
      langSelect.next().slideToggle(400);
    });
    $(document).mouseup(function (e) {
      if (
        !langSelect.is(e.target) &&
        langSelect.has(e.target).length === 0 &&
        !$(".lang-dropdown").is(e.target) &&
        $(".lang-dropdown").has(e.target).length === 0
      ) {
        langSelect.next().slideUp(400);
        langSelect.removeClass("is-active");
      }
    });
  }
}
