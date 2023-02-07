const arr = [9999, 5467, 3568, 4567, 2435, 63, 569, 476, 83, 4562, 346, 234, 3874, 94, 674, 74]

function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let
    arrTemp = [],
    flag = arr.splice(0, 1)[0],
    left = [],
    right = []
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] <= flag) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  arrTemp = [...QuickSort(left), flag, ...QuickSort(right)]
  return arrTemp
}

let res = QuickSort(arr)
console.log(res);
