async function(ds) {
  let data = ds.getValue();
  if (data) {
    data = JSON.parse(data);
    if (data.slide && !editor.pageData.creator) {
//      document.location.hash = data.slide;
//      editor.pageData.share = '';
      this.app.actions.gotoSlide(data.slide)
    }
  }
}