async function() {
  simplyApp.actions.updateNext()
  simplyHHS.ds.setValue(JSON.stringify({slide:editor.pageData.slide}))
}