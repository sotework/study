// 递归实现
/**
 * 求斐波那契数列第n个数的值。默认第一个数0，第二个数1
 * @param {any} n 第几个数
 * @returns 第n个数的值
 */
const fib = function (n) {
  let cache = [0, 1]
  if (n <= 1) {
    return n
  }

  function calcValue(num) {
    if (cache[num] !== undefined) { // 存在就返回
      return cache[num]
    } else {
      /**
       * 不存在cache[num]的话就要计算
       * cache[num]的值等于它前两个数的和
       * cache[num]它前一个数的下标有了，可以通过calcValue函数计算出来，即calcValue(num-1)
       * cache[num]它前前一个数的下标也有了，也可以通过calcValue函数计算出来，即calcValue(num-2)
       * 所以这个不存在的cache[num]的值就是calcValue(num-1)+calcValue(num-2)
       * 返回出去就好
       */
      cache[num] = calcValue(num - 1) + calcValue(num - 2)
      return cache[num]
    }
  }
  return calcValue(n)
}

console.log(fib(10));
