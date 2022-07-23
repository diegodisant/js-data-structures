class Node {
  constructor(value) {
    /** @property {Node} nextNode */
    this.nextNode = null;
    this.value = value;
  }

  /**
   * @returns {Node}
   */
  clone() {
    const node = new Node(
      this.value,
    );

    node.nextNode = this.nextNode;

    return node;
  }
}

module.exports = Node;
