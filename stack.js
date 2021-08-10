/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  static stackEmptyError() {
    return Error("stack empty");
  }

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const node = new Node(val);
    if(this.isEmpty()) {
      this.first = this.last = node;
      this.size = 1;
    } else {
      node.next = this.first;
      this.first = node;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty()){
      throw Stack.stackEmptyError();
    } else {
      const val = this.first.val;
      this.first = this.first.next;
      if(this.first === null) this.last = null;
      this.size--;
      return val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.first === null;
  }
}

module.exports = Stack;
