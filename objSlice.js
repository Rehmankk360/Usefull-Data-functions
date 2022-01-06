export default function objSlice(obj, cb, from, to) {
  let res = {}
  let cuttedArr = Object.keys(obj).slice(from, to)
  for (let i = 0; i < cuttedArr.length; i++) {
    res[cuttedArr[i]] = obj[cuttedArr[i]]
  }
  cb(res)
}
