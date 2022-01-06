export default function modifiedObjSlicedMap(obj, cb, start, end) {
  const slicedMap = []
  const hashes = obj.hashArr
  for (let i = start; i < end; i++) {
    const isFinished = !hashes[i] && !hashes[i + 1]
    if (isFinished) break

    slicedMap.push(cb(obj[hashes[i]], hashes[i]))
  }
  return slicedMap
}
