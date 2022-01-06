export default function modifiedObjSlice(obj, cb, start, end) {
  const slicedObj = {}
  const hashes = obj.hashArr
  for (let i = start; i < end; i++) {
    const isFinished = !hashes[i] && !hashes[i + 1]
    if (isFinished) break

    slicedObj[hashes[i]] = obj[hashes[i]]
  }
  cb(slicedObj)
}
