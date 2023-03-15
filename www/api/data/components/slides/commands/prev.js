async function() {
  let slide=1
  if (window.location.hash.substr(0,7)=='#slide-') {
    slide = parseInt(window.location.hash.substr(7)) || 1
  }
  slide = Math.max(1, slide-1)
  return simplyApp.actions.goto(slide)
}