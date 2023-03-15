async function(slide) {
  let slides = document.querySelector('main.slides')
  slide  = Math.max(1, Math.min(slide, slides.querySelectorAll('.slide').length))
  window.location.hash='#slide-'+slide
  slides.scrollLeft = document.getElementById('slide-'+slide).offsetLeft
  return true
}