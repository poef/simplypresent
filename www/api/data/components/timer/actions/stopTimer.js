async function() {
  if (this.app.view.timerInterval) {
    clearInterval(this.app.view.timerInterval)
    this.app.view.timerInterval = null
  }
}