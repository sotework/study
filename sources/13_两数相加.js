/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 *
 * eg:
 *     2 -> 4 -> 3
 *   + 5 -> 6 -> 4
 *   -------------
 *   = 7 -> 0 -> 8
 */

/**
 * 构建链表节点
 * @param {any} val 节点的值
 * @param {any} next 节点的指针
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * 生成简单链表
 * @param {any} arr
 */
function GenerateNodeList(arr) {
  let _arr = arr.reverse(); //反转数组
  //初始节点
  let initNode = new ListNode();
  //当前节点，默认为初始节点
  let currNode = initNode;
  for (let i = 0, len = _arr.length; i < len; i++) {
    //给当前节点赋值
    currNode.val = _arr[i];
    //给当前节点的next赋值
    currNode.next = _arr[i + 1] ? new ListNode(_arr[i + 1]) : null;
    /**
     * ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
     * 通过chrome的devtools调试获得以下结论：
     * 把next赋值给currNode
     * 原本currNode和initNode是相同引用
     * 现在currNode使用了next的引用，而next是initNode的next的引用
     * 所以每次断开引用的时候，总会在initNode中留下之前currNode引用next对象时丢失的那部分数据
     * 累积下来就是最终组装好的链表了
     */
    currNode = currNode.next;
  }
  return initNode;
}
let a = GenerateNodeList([1, 2, 3, 4, 5, 6, 7]);
console.log(JSON.stringify(a, null, 2));


//构建l1链
const l1 = GenerateNodeList([3, 4, 2]);
//构建l2链
const l2 = GenerateNodeList([4, 6, 5]);


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let initNode = new ListNode(); //创建一个根节点
  let currNode = initNode; //创建当前节点，默认把根节点赋值给他，后面改变next引用使用
  let carry = 0; //进位数，节点的值相加的时候进位的数
  while (l1 || l2) { //当两条链其中一个有值的时候
    let newNode = new ListNode(); //创建一个新节点
    //获取l1,l2当前节点的值
    let l1Val = l1 !== null ? l1.val : 0;
    let l2Val = l2 !== null ? l2.val : 0;
    //计算当前节点值的和（需要加上进位），由于是想初等数学一样从个位倒着计算，所以进位数carry的默认值是0
    let sumVal = l1Val + l2Val + carry;
    //获取进位数，有进位的话值为1，没有的话为0
    carry = Math.floor(sumVal / 10);
    //给新节点赋值
    newNode.val = sumVal % 10;
    //更新l1、l2的节点为下一级，供下次迭代使用
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    //更新当前节点的下一个节点为新节点，供下次迭代使用
    currNode.next = newNode;
    //更新当前节点为下一个节点，供下次迭代使用
    currNode = currNode.next;
  }
  if (carry) { //如果两条链都处理完，最后有进位的话
    //重新创建一个值为1的新节点
    newNode = new ListNode(1);
    //让当前（最后）一个节点的下一个节点指向它
    currNode.next = newNode;
  }
  return initNode.next;
};

//console.log('res', addTwoNumbers(l1, l2));


/*
思路整理：
  构建节点（ListNode）:
    创建对象，包含两个属性：
      1.val：当前对象携带的值
      2.next：当前对象指向下一个对象的指针
  构建链表（GenerateNodeList）：
    1.接收一个数组，根据题目描述，反转一下
    2.创建一个根节点，最后处理完链表作为返回值
    3.创建一个当前节点，默认当前节点为根节点
    4.遍历反转后的数组，给当前节点赋值，创建新节点赋值给当前节点的next，当前节点断开元来和initNode相同的引用，如此往复（详见很多叹号的那段注释）
  计算和（addTwoNumbers）：
    原理同GenerateNodeList函数，只是构建的链表的每个节点的val变成了其他两个链表的和
*/
