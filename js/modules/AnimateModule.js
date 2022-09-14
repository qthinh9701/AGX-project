export default function AnimateModule() {
  let tl = gsap.timeline();
  let hd = $(".header");
  function animateTile() {
    tl.to(".banner", 1.5, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeInOut,
    })
      .to(
        ".banner__content .title-under",
        1.5,
        {
          scale: 1,
          opacity: 1,
          ease: Power2.easeInOut,
        },
        "-=.7"
      )
      .to(
        ".banner__content .title-main",
        1,
        {
          yPercent: 0,
          opacity: 1,
          ease: Power2.easeInOut,
        },
        "-=.5"
      )
      .to(
        hd,
        1,
        {
          y: 0,
          opacity: 1,
          ease: Power2.easeInOut,
        },
        "-=.7"
      );
  }
  animateTile();
}
