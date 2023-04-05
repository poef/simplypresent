async function() {
  let nextSlidePreview = document.querySelector('.slides.slides-next');
  if (nextSlidePreview) {
    let nextSlide = nextSlidePreview.querySelector('.slide:nth-child('+(parseInt(editor.pageData.slide)+1)+')')
    if (nextSlide) {
      nextSlide.scrollIntoView()
    }
  }
}