async function() {
  this.app.keyboard = slidesKeyboard
  await this.call('initMenu')
  await this.call('initSlides')
}