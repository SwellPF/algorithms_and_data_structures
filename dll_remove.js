class Node{
    constructor(val){
        this.val = val;
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;    
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    
    pop(index){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.tail = poppedNode.prev;
        this.tail.next = null;
        this.length--;
        return poppedNode;
    }
    
    
    get(index){
        if(index < 0 || index >= this.length) return null;
        let count, current;
        if(index <= this.length/2) {
            count = 0;
            current = this.head;
            while (count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(current !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    
    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
              
        this.length--;
        return oldHead;
    }
    
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return shift(index);
        if(index === this.length - 1) return pop(index);
        let removeNode = this.get(index);
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}
