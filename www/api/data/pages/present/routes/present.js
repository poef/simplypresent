async function(params) {
  editor.pageData.page = "present"
  await simplyApp.actions.start()
  simplyApp.actions.gotoSlide(1)
}