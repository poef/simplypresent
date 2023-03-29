async function(slide) {
  if (slide===editor.pageData.slide) {
	return
  }
  editor.pageData.slide = slide
  let slides = document.querySelector('.slides-present')
  slide  = Math.max(1, Math.min(slide, slides.querySelectorAll('.slide').length))
  window.location.hash='#slide-'+slide
  slides.scrollLeft = document.getElementById('slide-'+slide).offsetLeft
  simplyApp.actions.updateNext()
  simplyHHS.ds.setValue(JSON.stringify({slide:slide}))
  return true
}