import { Clonable } from "../util/Clonable.js";

export class Node extends Clonable {
  constructor(value) {
    super();

    /** @property {Node} nextNode */
    this.nextNode = null;
    this.value = value;
  }

  /**
   *
   * @param {Node} node
   */
  setNext(node) {
    this.nextNode = node;
  }

  /**
   * @returns {Node}
   */
  clone() {
    const node = new Node(
      this.value
    );

    this.setNext(this.nextNode);

    return node;
  }
}
