function createNewNode(value) {
  return {
    value: value,
    next: null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
  }
  /**
   * 把元素添加到尾部
   * @param {any} value
   */
  append(value) {
    // 新建一个元素
    const newNode = createNewNode(value)
    // 让当前最后一个元素的next指向它
    this.tail.next = newNode
    // 这个时候newNode就是最后一个元素，所以把它赋值给最后一个元素
    this.tail = newNode
  }

  /**
   * 把元素添加到头部
   * @param {any} value
   */
  prepend(value) {
    const newNode = createNewNode(value)
    // 先把新元素接到head前面
    newNode.next = this.head
    // 再告诉链表新头变成了newNode
    this.head = newNode
  }
  /**
   * 在链表的idx下标的位置插入一个元素
   * @param {any} idx 要插入元素的下标
   * @param {any} value
   */
  insert(idx, value) {
    const newNode = createNewNode(value)
    // 当前元素的占位
    let current = this.head
    for (var i = 0; i < idx - 1; i++) {
      // 把下一个元素赋值给上一个元素，这样中间才能腾出来一个坑
      current = current.next
    }
    // 断开之后
    // 把新元素赋值给当前的下一个指向，把当前的下一个赋值给新元素，这样就连接起来了
    //[current.next, newNode.next] = [newNode, current.next]
    // // 下面这三行和上面一行等价
    let temp = current.next
    current.next = newNode
    newNode.next = temp
  }

  /**
   * 删除一个元素
   * @param {any} idx
   */
  remove(idx) {
    // 当前元素的占位
    let current = this.head
    for (var i = 0; i < idx - 1; i++) {
      // 把下一个元素赋值给上一个元素，这样中间才能腾出来一个坑
      current = current.next
    }
    current.next = current.next.next
  }

  /**
   * 反转链表
   */
  reverse() {
    if (this.head === null) {
      return null
    }
    let first = null
    let head = this.head
    //while (head.next) {
    //  first = head.next
    //  first.next = head
    //  head.next = first
    //}

    // 012345
    while (head) {
      let holder = head.next  // linkedList: 012345           holder: 12345
      head.next = first       // linkedList: 0 12345
      first = head            // linkedList: first 12345
      head = holder           // head: 12345
      console.log('------------------------------', JSON.stringify(head, null, '  '))
    }
    return first
  }
}
let linkedList = new LinkedList(0)
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
// 0 -> 1 -> 2 -> 3 -> 4 -> 5

//linkedList.insert(3, 9)
//// 0 -> 1 -> 2 -> 9 -> 3 -> 4 -> 5

//linkedList.remove(1)
//// 0 -> 2 -> 9 -> 3 -> 4 -> 5


linkedList.reverse()


//console.log(JSON.stringify(linkedList, null, '  '));
