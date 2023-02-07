export { };
//数组中的地K个最大元素

//分析：
//  把数组从大到小排列，然后取第k个大的数（即第k-1个数）


function findKthLargest(nums: number[], k: number): number {
  let arr = QuickSort(nums);
  console.log(arr);
  return arr[k - 1];
};

function QuickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = arr[0];
  const left = [];
  const mids = [];
  const right = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    const curr = arr[i];
    if (curr > mid) {
      left.push(curr);
    } else if (curr < mid) {
      right.push(curr);
    } else {
      mids.push(curr);
    }
  }
  return QuickSort(left).concat(mids).concat(QuickSort(right));
  //return [...QuickSort(left), ...mids, ...QuickSort(right)]; // 扩展运算符（...）占用内存过多，不建议使用
}


const res = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log('最终运行结果', res);
