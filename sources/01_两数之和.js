/**
 * https://leetcode-cn.com/problems/two-sum/
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */
function twoSum(nums, target) {
  let obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i]
    }
    obj[nums[i]] = i;
  }
  return [];
};

let arr = [45, 24, 6, 134, 5, 1, 34, 6, 23, 4, 6];
const res = twoSum(arr, 51);
console.log(res);

/*
设：数组遍历的当前元素为a，另一个符合要求的元素为b
即：a + b = target

思路整理：
1.新建一个对象obj
2.遍历数组
3.把a作为obj的key，a的下标作为值
4.第3步赋值之前，判断如果target-a的差刚好已经是obj的key了
5.取【key为a的值】和【key为target-a的值】即为两个数字在数组中的下标
*/
