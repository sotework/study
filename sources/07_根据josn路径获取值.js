const obj = {
  b: {
    cs1: [
      { d: 1 },
      { d: 2 }
    ],
    cs2: [
      { d: 3 },
      { d: 4 }
    ]
  }
}

function GetValueByPath(obj, path) {
  let res = obj
  let tampPath = path
  tampPath = path.replace(/\[(\d+)\]/g, '.$1')
  let pathArr = tampPath.split('.')
  for (var i in pathArr) {
    res = res[pathArr[i]]
  }
  return res
}
let res = GetValueByPath(obj, 'b.cs2[1].d')
console.log(res);
