async function() {
  let slide=1
  if (window.location.hash.substr(0,7)=='#slide-') {
    slide = parseInt(window.location.hash.substr(7)) || 1
  }
  let max = document.querySelectorAll('main.slides .slide').length;
  slide = Math.min(max, slide+1)
  return simplyApp.actions.gotoSlide(slide)
}