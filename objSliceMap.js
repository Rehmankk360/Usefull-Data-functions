export default function objSliceMap(obj, cb, from, to) {
  let res = []
  let cuttedArr = Object.keys(obj).slice(from, to)
  for (let i = 0; i < cuttedArr.length; i++) {
    res[cuttedArr[i]] = obj[cuttedArr[i]]
    res.push(cb(obj[cuttedArr[i]], res[cuttedArr[i]]))
  }
  return res
}
