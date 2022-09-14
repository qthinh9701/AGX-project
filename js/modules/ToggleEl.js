export default function ToggleEl() {
  // toggle menu
  const menuToggle = $(".toggle-menu-js");
  const menuMobile = $(".mobile-nav");
  const expandIcon = $(".mobile-nav .expand-icon");
  const closeMenu = $(".mobile-nav-close");
  // toggle filter
  const toggleFilter = $(".toggle-filter-js");
  const closeFilter = $(".filter-mobile-close");
  const filterMobile = $(".filter-mobile-js");

  function hideEl(el, className) {
    if (el) {
      el.removeClass("show");
      $("body").removeClass(className);
    }
  }

  function showEl(el, className) {
    if (el) {
      el.addClass("show");
      $("body").addClass(className);
    }
  }

  if (menuToggle) {
    menuToggle.on("click", function () {
      showEl(menuMobile, "menu-is-show");
    });
  }
  if (closeMenu) {
    closeMenu.on("click", function () {
      hideEl(menuMobile, "menu-is-show");
    });
  }

  $(document).mouseup(function (e) {
    if (
      !menuToggle.is(e.target) &&
      menuToggle.has(e.target).length === 0 &&
      !$(".mobile-nav-main").is(e.target) &&
      $(".mobile-nav-main").has(e.target).length === 0
    ) {
      hideEl(menuMobile, "menu-is-show");
    }
    if (
      !toggleFilter.is(e.target) &&
      toggleFilter.has(e.target).length === 0 &&
      !$(".filter-mobile-main").is(e.target) &&
      $(".filter-mobile-main").has(e.target).length === 0
    ) {
      hideEl(filterMobile, "modal-is-show");
    }
  });

  // expand category
  if (expandIcon) {
    expandIcon.on("click", function () {
      $(this).next().slideToggle(500);
      $(this).parent().toggleClass("active");
    });
  }

  if (toggleFilter) {
    toggleFilter.on("click", function () {
      showEl(filterMobile, "modal-is-show");
    });
  }
  if (closeFilter) {
    closeFilter.on("click", function () {
      hideEl(filterMobile, "modal-is-show");
    });
  }
}
