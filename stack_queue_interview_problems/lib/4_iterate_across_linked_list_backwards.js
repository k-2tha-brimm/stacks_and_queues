// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------
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

function iterateAcrossLinkedListBackwards(linkedList) {
    let stack = new Stack();
    for(let i = 0; i < linkedList.length; i++) {
        let thing = linkedList.get(i);
        stack.push(thing);
        console.log(thing);
    }
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
