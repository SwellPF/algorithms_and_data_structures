class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    rotate(num){
        let temp;
        if(num > 0) {
            for(let i = 0; i < num; i++){
                this.tail.next = this.head;
                temp = this.head.next;
                this.tail = this.head;
                this.tail.next = null;
                this.head = temp;
            } 
        } else {
            for(let i = 0; i < this.length+num; i++){
                this.tail.next = this.head;
                temp = this.head.next;
                this.tail = this.head;
                this.tail.next = null;
                this.head = temp;
                }
        }
    }
}