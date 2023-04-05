async function(slide) {
  if (slide===editor.pageData.slide) {
	return
  }
  editor.pageData.slide = slide // also triggers an update to HHS state;
  simplyApp.actions.setSlide()
  simplyApp.actions.setNextSlide()
  simplyApp.actions.setWindowHash()
  // simplyApp.actions.setTimerSlide()
  // simplyApp.actions.setNotesSlide
  return true
}