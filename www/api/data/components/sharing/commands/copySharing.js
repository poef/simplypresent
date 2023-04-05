function(el) {
  let shareLink = editor.transformers.wordsLink.render(editor.pageData.hhsWords)
  navigator.clipboard.writeText(shareLink.href)
  alert("The link is now in your clipboard!")
}