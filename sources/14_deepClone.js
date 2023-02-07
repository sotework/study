let x = {
  a: {
    c: 4,
    e: [
      { aa: 1, bb: 2 }
    ]
  },
  b: [
    {
      ff: 3,
      uu: 9
    }
  ],
  func() {
    console.log('func');
  }
}
console.log('对象：前', x);

function DeepClone(val) {
  let valTemp;
  let objType = Object.prototype.toString.call(val)

  if (objType === '[object Object]') {
    valTemp = {}
    for (var i in val) {
      if (val.hasOwnProperty(i)) {
        valTemp[i] = DeepClone(val[i])
      }
    }
  } else if (objType === '[object Array]') {
    valTemp = []
    for (var j = 0, len = val.length; j < len; j++) {
      valTemp.push(DeepClone(val[j]))
    }
  } else {
    valTemp = val
  }

  return valTemp
}



let result = DeepClone(x)

console.log('对象：后', result);
