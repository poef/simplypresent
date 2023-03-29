async function(words) {
  let resources = await simplyHHS.init()
  let space = HHS.Space.fromWordCode(words, resources) // replace 3 words;
  let ds = await space.getEntryPoint()
  simplyHHS.ds = ds
  ds.setResources(resources)
  await resources.store.save(ds)
  await ds.startSync()
  ds.addSyncCallback((newState) => {
    this.app.actions.update(ds)
    ds.contents.addMutationOpCallback(() => {
      this.app.actions.update(ds)
    })
  })
  this.app.actions.update(ds)
  return ds
}