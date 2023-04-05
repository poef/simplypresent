function() {
  console.log("Add slide change listener for HHS")
  document.addEventListener("simply-data-changed", function(event) {
    console.log(event.data.dataBinding)
    if (
      (event.data.dataBinding.parentKey == "/") && 
      (event.data.dataBinding.key == "slide")
    ) {
      console.log("Updating HHS state to " + editor.pageData.slide)
      simplyHHS.ds.setValue(JSON.stringify({slide:editor.pageData.slide}))
    }
  })
}