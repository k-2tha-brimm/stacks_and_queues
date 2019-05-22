// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
   constructor(val){
       this.value = val;
       this.next = null;
   }

}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node){
        const newNode = node;
        if (!this.top){
            this.bottom = newNode;
            this.top = newNode;
            ++this.length;
        } else if (this.length >= 1){
            const first = this.top;
            this.top = newNode;
            this.top.next = first;
            ++this.length;
        } 
        return this.length;
    }

    pop(){
        if (!this.top) return null;
        if (this.length === 1){
            const removed = this.top;
            this.top = null;
            this.bottom = null;
            --this.length;
            return removed;
        } else {
            const removed = this.top;
            this.top = this.top.next;
            --this.length;
            return removed;
        }
        
    }

    size(){
        if (this.length < 0) return 0;
        return this.length;
    }

}

class StackQueue {
    constructor(){
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(val){
        let newNode = new Node(val);
        this.inStack.push(newNode);
        if (!this.front){
            this.front = newNode;
            this.back = newNode;
        } else {
            const temp = this.back;
            this.back = newNode;
            temp.next = this.back;
        }
        return this.outStack.size() + this.inStack.size();
    }

    dequeue(){
        let out;
      if (!this.front) return null;
      if (this.front === this.back){
          out = this.front;
          this.front = null;
          this.back = null;
          
      } else {
          if (this.outStack.length > 0){
              out = this.outStack.pop();
              this.front = out.next;
              
          } else {
            while (this.inStack.length > 0){
                this.outStack.push(this.inStack.pop());
            }
            this.dequeue();
          }

      }
      return out;
    }

    size(){
        return this.outStack.size() + this.inStack.size();
    }
};
const stackQueue = new StackQueue();
stackQueue.enqueue('A');
stackQueue.enqueue('B');
stackQueue.dequeue();

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
