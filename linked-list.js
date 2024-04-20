/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    // if there is no head
    if(!this.head){
      this.head=newNode;
      this.tail = newNode;
    } else {
      // if there is a head
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    // if the list is empty add as the head 
    if(this.head === null) {
      this.head = newNode;
      // or next node was the head but we change the head to our new node 
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    // if this is only node in the list it's both the head and the tail 
    if (this.length === 0) this.tail = this.head

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.isEmpty()) {
      throw new Error("List is empty.");
    }
    return this.removeAt(this.length -1);
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.isEmpty()) {
      throw new Error("List is empty.");
    }
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0){
      throw new Error("Invalid index.")
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0){
      throw new Error("Invalid index.")
    }
    let currentNode = this._get(idx);
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);

    let previousNode = this._get(idx -1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    previousNode.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0){
      throw new Error("Invalid index.")
    }
    // removing in the middle of the list
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let currentNode = this.head;

    while(currentNode) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return total/this.length;
  }
}

module.exports = LinkedList;
