import { Node } from './Node.js';

export class LinkedList {
  constructor() {
    /** @property {Node} headerNode */
    this.headerNode = null;
  }

  add(value) {
    if (this.headerNode === null) {
      this.headerNode = new Node(value);

      return;
    }

    const newNode = new Node(value);

    newNode.setNext(this.headerNode);
    this.headerNode.setNext(newNode);
    this.headerNode = newNode;
  }

  print() {
    let lastNode = this.headerNode.clone();

    for (;lastNode !== null;) {
      console.log(`${lastNode.value}`);

      lastNode = lastNode.nextNode;
    }
  }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.print();
