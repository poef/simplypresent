async function() {
  this.app.started = true
  this.app.keyboard = simply.keyboard(this.app, slidesKeyboard)
  await this.call('initMenu')
  await this.call('initSlides')
}