export default function objForEach(obj, cb) {
  const list = []
  let key
  for (key in obj) {
    const value = obj[key]
    list.push(cb(value, key))
  }
}
