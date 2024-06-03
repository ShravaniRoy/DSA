class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(val){
        if(!this.head){
            this.head = this.tail = new Node(val);
            this.size = this.size + 1;
        } else {
            let newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode;
            this.size = this.size + 1;
        }
    }
    pop(){
        if(!this.head) return undefined;
        let currNode = this.head;
        let prevNode = currNode;
        while(currNode.next){
            prevNode = currNode;
            currNode = currNode.next;
        }
        prevNode.next = null;
        this.tail = prevNode;
        this.size--;
    }
    getSize(){
        return this.size;
    }
    getItem(idx){
        if(idx<0 || idx >= this.size) return null;
        let currNode = this.head;
        for(let i=0; i<this.size; i++){
            if(i===idx){
                return currNode;
            } else {
                currNode = currNode.next;
            }
        }
    }
}

let ll1 = new LinkedList();
ll1.push("Hi");
ll1.push("Hello");
ll1.push("Namaste");
ll1.push("Nenu");
ll1.push("Mi");
ll1.push("Shravani");
console.log(ll1);
console.log(ll1.getItem(3));
ll1.pop();
console.log(ll1);
