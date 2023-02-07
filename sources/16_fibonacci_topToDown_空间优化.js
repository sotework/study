//空间优化实现
/**
 * 求斐波那契数列第n个数的值。默认第一个数0，第二个数1
 * @param {any} n 第几个数
 * @returns 第n个数的值
 */
const fib = function (n) {
  if (n <= 1) {
    return n
  }
  let p2 = 0
  let p1 = 1
  for (var i = 2; i <= n; i++) {
    [p2, p1] = [p1, p2 + p1]
  }
  return p1
}
console.log(fib(10));
