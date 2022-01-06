export default function limitObjMap(obj, limit, cb) {
  const list = []
  let counter = 0
  let key
  for (key in obj) {
    const value = obj[key]
    list.push(cb(value, key))
    if (counter >= limit) return list
    counter++
  }
}
