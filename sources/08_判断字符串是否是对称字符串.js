let source = 'abccba'

function IsReverseStr(str) {
  return str === str.split('').reverse().join('')
}

console.log(IsReverseStr(source));
