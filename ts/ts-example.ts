(() => {
  const storage = {
    max: undefined,
    items: []
  }

  Object.defineProperty(storage, 'max', { writable: false, value: 5000 })

  let currentStorage

  function storageUsed() {
    if(currentStorage) {
      return currentStorage
    }
    currentStorage = 0
    for(var i = 0; i < storage.items.length; i++) {
      currentStorage += storage.items[i].weigth
    }
    return currentStorage
  }

  function add(item) {
    if(storage.max - item.weight >= storageUsed()) {
      storage.items.push(item)
      currentStorage += item.weight
    }
  }
})()
