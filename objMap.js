export default function objMap(obj, cb) {
  const list = []
  let key
  for (key in obj) {
    const value = obj[key]
    list.push(cb(value, key))
  }
  return list
}
