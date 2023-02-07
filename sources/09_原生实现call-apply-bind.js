
let obj = {
  a: 'a',
  b: 'b'
}
function func() {
  console.log(this);
}

Function.prototype.call1 = function (thisArg) {
  // 如果本方法不是使用函数调用的，就报错
  if (typeof this !== 'function') {
    throw new TypeError('此方法只能用方法调用')
  }
  //有目标对象就使用目标对象，没有目标对象就使用全局对象
  thisArg = thisArg || window || global
  thisArg.func = this
  const res = thisArg.func(...[...arguments].slice(1))
  delete thisArg.func
  return res
}
Function.prototype.apply1 = function (thisArg, args) {
  if (typeof this !== 'function') {
    throw new TypeError('此方法只能用方法调用')
  }
  thisArg = thisArg || window || global
  thisArg.func = this
  const res = thisArg.func(...args)
  delete thisArg.func
  return res
}
Function.prototype.bind1 = function (thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError('此方法只能用方法调用')
  }
  // 获取bind的this函数
  const _this = this
  // 拿到bind函数的参数列表（除了第一个this）
  const args = [...arguments].slice(1)
  // 声明并返回bind之后的函数
  return function Func() {
    // 如果返回的函数的this是当前函数的实例
    if (this instanceof Func) {
      // 
      return new _this(...args)
    }
    return _this.apply(thisArg, args)
  }
}

let cons = func.bind1(obj, 1, 2, 3, 4)
//console.log(new cons(obj, 1, 2, 3, 4));
func.bind1(obj, 1, 2, 3, 4)()
