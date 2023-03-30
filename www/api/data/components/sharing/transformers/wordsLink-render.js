function(data) {
 this.originalValue = data
 return document.location.origin + document.location.pathname + "#words/" + data.join("/")
}