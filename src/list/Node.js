export class Node {
  /**
   *
   * @param {Node} nextNode
   * @param {*} value
   */
  constructor(nextNode, value) {
    this.nextNode = nextNode;
    this.value = value;
  }
}
