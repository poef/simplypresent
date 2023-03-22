async function() {
  if (simplyPresentConnection) {
    simplyPresentConnection.terminate();
    simplyPresentConnection = null
    document.body.removeAttribute('data-simply-present')
  } else {
    let connection = await simplyPresentRequest.start()
    simplyPresentConnection = connection
    document.body.setAttribute('data-simply-present',true)
  }
  simplyApp.actions.hideHelperMenu()
}