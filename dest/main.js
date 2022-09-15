import AnimateModule from "../js/modules/AnimateModule.js";
import AosModule from "../js/modules/AosModule.js";
import backToTop from "../js/modules/backToTop.js";
import ParallaxModule from "../js/modules/ParallaxModule.js";
import ScrollEff from "../js/modules/ScrollEff.js";
import StickyHeader from "../js/modules/StickyHeader.js";
import SwiperModule from "../js/modules/SwiperModule.js";
import ToggleCategory from "../js/modules/ToggleCategory.js";
import ToggleEl from "../js/modules/ToggleEl.js";
import ToggleLang from "../js/modules/ToggleLang.js";
import CheckboxModule from "../js/modules/CheckboxModule.js";
import PopupModule from "../js/modules/PopupModule.js";

window.addEventListener("DOMContentLoaded", () => {
  backToTop();
  ToggleLang();
  StickyHeader();
  ToggleEl();
  SwiperModule();
  ToggleCategory();
  ScrollEff();
  AnimateModule();
  AosModule();
  ParallaxModule();
  CheckboxModule();
  PopupModule();
});
