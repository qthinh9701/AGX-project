export default function ToggleCategory() {
  const expandIcon = $(".aside-category .expand-icon");
  if (expandIcon) {
    expandIcon.on("click", function (e) {
      e.preventDefault();
      let $this = $(this);
      $this.closest(".category-item").toggleClass("is-active");
      $this.parent().next("").slideToggle(400);
    });
  }
}
