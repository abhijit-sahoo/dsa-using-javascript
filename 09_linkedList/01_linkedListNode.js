//node

//-> linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
      this.size++;
    } else {
      let newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    };
  }

  pop() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const value = this.tail.data;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }

    let currentNode = this.head;

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    const value = currentNode.next.data;
    this.tail = currentNode;
    this.tail.next = null;
    this.size--;

    return value;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
    return this;
  }

  shift() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const value = this.head.data;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }
    const value = this.head.data;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  getFirst() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  get(index) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter == index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
    return null;
  }
  set(index, value) {
    let currentNode = this.get(index);
    if(currentNode){
        currentNode.data = value; 
        return true;
    }
    return false;
    
  }
  insert(index,value){
    
    if(index === 0){
        return this.unshift(value);
    }

    if(index === this.size){
        return this.push(value);
    }
    
    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    newNode.next= prevNode.next;
    prevNode.next = newNode;
    this.size++;
    return true;

  }
  clear(){
    this.head=null;
    this.tail=null;
    this.size=0;
  }
  

}

const myLinkedList = new LinkedList();
console.log(myLinkedList);

myLinkedList.push(10);
myLinkedList.push(15);
myLinkedList.push(40);
myLinkedList.push(17);
myLinkedList.push(56);

console.log(myLinkedList);

console.log(myLinkedList.pop());
console.log(myLinkedList);

console.log(myLinkedList.unshift(45));
console.log(myLinkedList.unshift(34));

console.log(myLinkedList.shift());
console.log(myLinkedList);

console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());
console.log(myLinkedList.get(6));
console.log(myLinkedList.set(6, 39));
console.log(myLinkedList.insert(2,30));
console.log(myLinkedList.get(2));
console.log(myLinkedList.size)
