async function(slide) {
  let slides = document.querySelector('.slides-present')
  slide  = Math.max(1, Math.min(slide, slides.querySelectorAll('.slide').length))
  window.location.hash='#slide-'+slide
  slides.scrollLeft = document.getElementById('slide-'+slide).offsetLeft
  return true
}