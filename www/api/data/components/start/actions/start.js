async function() {
  this.app.keyboard = simply.keyboard(this.app, slidesKeyboard)
  await this.call('initMenu')
  await this.call('initSlides')
}