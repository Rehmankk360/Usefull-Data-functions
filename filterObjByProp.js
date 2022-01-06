export default function filterObjByProp(obj, filterObj, cb) {
  const filtered = {}
  const hashArr = []
  let key
  let size = 0
  for (key in obj) {
    const prevMatches = {}
    if (obj.hasOwnProperty(key)) {
      for (const filter in filterObj) {
        const objectValue = obj[key][filter]
        const filterValue = filterObj[filter]
        const isMatching =
          filterObj[filter].toUpperCase() ==
          objectValue.slice(0, filterValue.length).toUpperCase()

        if (!isMatching) prevMatches[false] = filter
      }
      if (!prevMatches[false]) {
        filtered[key] = obj[key]
        hashArr.push(key)
        size++
      }
    }
  }

  Object.setPrototypeOf(filtered, { size, hashArr })
  cb(filtered)
}
