window.addEventListener('scroll', (evt) => {
  document.body.style.cssText += `--scrollTop: ${Math.round(this.scrollY)}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});
