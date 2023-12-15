class Stack {
  #stack;
  constructor(size) {
    this.#stack = [];
    this.size = size;
  }
  add(value) {
    const ans = this.#isFull() ? "is full" : this.#stack.push(value);
    return ans;
  }
  pop() {
    const ans = this.#isEmpty() ? "is empty" : this.#stack.pop();
    return ans;
  }
  stackvalue() {
    return this.#stack;
  }
  #isFull() {
    const ans = this.#stack.length >= this.size ? true : false;
    return ans;
  }
  #isEmpty() {
    const ans = this.#stack.length > 0 ? false : true;
    return ans;
  }
  size() {
    return this.#stack.length;
  }
}

const instance1 = new Stack(3);
console.log(instance1.add(1));
console.log(instance1.add(2));
console.log(instance1.add(3));
console.log(instance1.add(4));
console.log(instance1.add(5));
console.log(instance1.stackvalue());
console.log(instance1.pop());
console.log(instance1.pop());
console.log(instance1.pop());
console.log(instance1.pop());
console.log(instance1.pop());
console.log(instance1.stackvalue());
