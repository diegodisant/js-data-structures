const Node = require('./Node');

class LinkedList {
  constructor() {
    /** @property {Node} rootNode */
    this.rootNode = null;

    /** @property {Node} headerNode */
    this.headerNode = null;

    /** @property {number} size */
    this.size = 0;
  }

  /**
   * @param {*} value
   */
  add(value) {
    this.size += 1;

    const newNode = new Node(value);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      this.headerNode = newNode;

      return;
    }

    this.headerNode.nextNode = newNode;
    this.headerNode = newNode;
  }

  /**
   * @param {*} value
   */
  preppend(value) {
    this.size += 1;

    const newNode = new Node(value);

    newNode.nextNode = this.rootNode;
    this.rootNode = newNode;

    if (this.headerNode === null) {
      this.headerNode = newNode;
    }
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  delete(value) {
    let prevNode = null;
    let node = this.rootNode.clone();

    for (;node !== null;) {
      const nodeValue = node.value;

      if (nodeValue === value) {
        prevNode.nextNode = node.nextNode;

      }

      prevNode = node;
      node = node.nextNode;
    }
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  contains(value) {
    let node = this.rootNode.clone();

    for (;node !== null;) {
      const nodeValue = node.value;

      if (nodeValue === value) {
        return true;
      }

      node = node.nextNode;
    }

    return false;
  }

  traverse() {
    let node = this.rootNode.clone();

    for (;node !== null;) {
      console.log(`${node.value}`);

      node = node.nextNode;
    }
  }
}

module.exports = LinkedList;
