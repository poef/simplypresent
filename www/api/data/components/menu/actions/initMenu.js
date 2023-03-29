async function() {
  var checkHelper = function() {
    if ( location.hash == '#simply-edit' || location.hash == '#present') {
      this.call('hideHelper')
    } 
  }
  window.addEventListener('hashchange', checkHelper)
  checkHelper()
}