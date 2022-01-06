export default function filteredArrObjbyObj(arrpropsObj, propsObj, cb) {
  const filteredArrObj = []
  for (let i = 0; i < arrpropsObj.length; i++) {
    const obj = arrpropsObj[i]
    let prevMatches = {}

    for (const prop in propsObj) {
      const checkValue = propsObj[prop]
      const objectValue = obj[prop]
      const isMatching =
        checkValue.toUpperCase() ==
        objectValue?.slice(0, checkValue.length).toUpperCase()
      if (!isMatching) prevMatches[false] = prop
    }
    const isAllPassed = !prevMatches[false]
    if (isAllPassed) filteredArrObj.push(obj)
  }
  cb(filteredArrObj)
}
