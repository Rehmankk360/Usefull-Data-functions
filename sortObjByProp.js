// This algorithm has O(nlog + n)  Time Complexity  and O(2) space complexity
export default function sortObjByProp(obj, prop, fromTo) {
  let keys = Object.keys(obj)
  const sortedObj = {}

  // Swap indices
  function swap(a, b) {
    let tmp = keys[b]
    keys[b] = keys[a]
    keys[a] = tmp
  }

  // O(nLog)
  for (let i = 0; i < keys.length; i++) {
    for (let j = i; j < keys.length; j++) {
      // sorting Direction
      let direction = obj[keys[i]][prop] > obj[keys[j]][prop]
      if (fromTo == "desc") direction = !direction
      if (j != i && direction) {
        swap(j, i)
      }
    }
  }

  //   O(n)
  for (let i = 0; i < keys.length; i++) {
    sortedObj[keys[i]] = obj[keys[i]]
  }

  return sortedObj
}
