// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
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

    push(val){
        const newNode = new Node(val);
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
            return removed.value;
        } else {
            const removed = this.top;
            this.top = this.top.next;
            --this.length;
            return removed.value;
        }
        
    }

    size(){
        if (this.length < 0) return 0;
        return this.length;
    }
}


exports.Node = Node;
exports.Stack = Stack;
