
/**
 * 事件循环（Event Loop）的队列（Task Queue）执行顺序：
 * 微任务 => 页面渲染 => 宏任务
 * 宏任务不会阻塞页面渲染，所以也会把alert写入宏任务中执行
 */


// 宏任务（Marco Task）eg：setTimeout
setTimeout(() => {
  console.log(3);
}, 0)

// 微任务（Micro Task）eg：Promise
Promise.resolve().then(() => {
  console.log(2);
})

// 主线程
console.log(1);


// 执行结果 1，2，3
