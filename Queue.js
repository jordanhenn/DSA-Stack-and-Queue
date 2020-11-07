class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first
        this.first = this.first.next

        if (node === this.last) {
            this.last === null;
        }
        return node.value;
    }
}

function peek(list) {
    return list.first;
}

function display(list) {
    let currNode = list.first;
    const nodeArray = []
    while (currNode !== null) {
        nodeArray.push(currNode)
        currNode = currNode.next
    }
    return nodeArray
}

function main() {
    const starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhurua');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    console.log(peek(starTrekQ));
    console.log(display(starTrekQ));
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    console.log(display(starTrekQ));
}

main();


class _DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _DoublyNode(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
            node.previous = this.last
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first
        this.first = this.first.next

        if (node === this.last) {
            this.last === null;
        }
        return node.value;
    }
}

function doublyMain() {
    const starTrekDQ = new DoublyQueue();
    starTrekDQ.enqueue('Kirk');
    starTrekDQ.enqueue('Spock');
    starTrekDQ.enqueue('Uhurua');
    starTrekDQ.enqueue('Sulu');
    starTrekDQ.enqueue('Checkov');
    console.log(peek(starTrekDQ));
    console.log(display(starTrekDQ));
    starTrekDQ.dequeue();
    starTrekDQ.dequeue();
    console.log(display(starTrekDQ));
}

doublyMain();