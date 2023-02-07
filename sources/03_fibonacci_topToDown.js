//动态规划（DP）实现
/**
 * 求斐波那契数列第n个数的值。默认第一个数0，第二个数1
 * @param {any} n 第几个数
 * @returns 第n个数的值
 */
const fib = function (n) {
  if (n <= 1) {
    return n
  }
  // 方法1
  let p2 = 0
  let p1 = 1
  for (var i = 2; i <= n; i++) {
    /**
     * p2    p1    result  
     *       p2    p1        下一次的新数先不管
     * 用result填p1，即p1=result
     * 用p1填p2，即p2=p1
     * 然后p1，也就是result，即最后返回的值
     */
    // 获取新数字的值，即最后返回的结果
    result = p2 + p1
    // 吧前两个数后移
    p2 = p1
    p1 = result
  }
  return result
}
console.log(fib(10));
