class ListNode {
    constructor(data = data) {
        this.data = data;
        this.next = null;
    }
};

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    append(value) {
        let node = this.head;
        let newNode = new ListNode(value);
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }

    prepend(value) {
        let node = this.head;
        let newNode = new ListNode(value);
        newNode.next = node;
        this.head = newNode;
    }

    header() {
        console.log(this.head);
    }

    tail() {
        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        console.log(node);
    }

    at(index) {
        let node = this.head;
        let count = 0;
        let indexcount = index;
        while(node && count != indexcount) {
            count++;
            node = node.next;
        }
        console.log(node);
    }

    
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(15);
node1.next = node2;

let list = new LinkedList(node1);

list.append(3);
list.prepend(4);
list.prepend(10);
list.append(11);
list.at(0);










