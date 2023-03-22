async function() {
  if (!this.app.view.timerInterval) {
    let timeLeft = parseInt(this.app.view.totalTime)
    this.app.view.timerInterval = window.setInterval(() => {
      if (!timerPaused) {
        this.app.view['time-left'] = timeLeft--
      }
    }, 1000)
  } else if (this.app.view.timerPaused) {
    this.app.view.timerPaused = false
  }
}