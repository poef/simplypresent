async function() {
  let nextSlidePreview = document.querySelector('.slides.nextSlide');
  if (nextSlidePreview) {
    let nextSlide = nextSlidePreview.querySelector('.slide:nth-child('+(slide+1)+')')
    if (nextSlide) {
      nextSlide.scrollIntoView()
    }
  }
}