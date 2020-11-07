class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}


function peek(list) {
    return list.top;
}

function isEmpty(list) {
    if (list.top === null) {
        return 'Empty';
    }
    else {
        return 'Not Empty';
    }
}

function display(list) {
    let currNode = list.top;
    const nodeArray = []
    while (currNode !== null) {
        nodeArray.push(currNode)
        currNode = currNode.next
    }
    return nodeArray
}

function main() {
    const starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    console.log(display(starTrek));
    starTrek.pop();
    starTrek.pop();
    console.log(display(starTrek));
}

main();

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const palindromeStack = new Stack();

    for (let i = 0; i < s.length; i++) {
        palindromeStack.push(s[i])
    }

    let palindrome = ''
    let currNode = palindromeStack.top
    while (currNode !== null) {
        palindrome += currNode.data
        currNode = currNode.next
    }

    if (s === palindrome) {
        return `${s} is a palindrome`
    }
    else if (s !== palindrome) {
        return `${s} is NOT a palindrome`
    }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


function matchParentheses(expression) {
    const expressionStack = new Stack();
    for (let i = 0; i < expression.length; i++) {
        expressionStack.push(expression[i])
    }

    let openCount = 0
    let closedCount = 0
    let currNode = expressionStack.top
    while (currNode !== null) {
        if (currNode.data === '(') {
            openCount = openCount + 1
        }
        else if (currNode.data === ')') {
            closedCount = closedCount + 1
        }
        currNode = currNode.next
    }

    if (openCount > closedCount) {
        return `Missing ')'`;
    }

    if (openCount < closedCount) {
        return `Missing '('`;
    }

    if (openCount === closedCount) {
        return `Correct number of '(' and ')'`;
    }
}

console.log(matchParentheses('(2+5)'));
console.log(matchParentheses('(2+5'));
console.log(matchParentheses('2+5)'));

function sortStack(stack) {
    const newStack = new Stack()
    let currNode = stack.top
    while (currNode !== null) {
        if(currNode.data < currNode.next.data) {
            newStack.push(currNode.data)
            newStack.push(currNode.next.data)
            currNode = currNode.next.next
        }
        else if (currNode.data > currNode.next.data) {
            newStack.push(currNode.next.data)
            newStack.push(currNode.data)
            currNode = currNode.next.next
        }
        else {
            newStack.push(currNode.data)
            newStack.push(currNode.next.data)
            currNode = currNode.next.next
        }
    } 
    console.log(display(newStack))
}

//8. Queue implementation with stack -- need help

class StackQueue {
    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }
    
    enqueue(data) {
        this.stack1.push(data)
    }

    dequeue() {
        while (this.stack1.length > 0) {
            this.stack2.push(stack1.pop());
        }
        return this.stack2.pop();
    }

    enqueue(value) {
        for (let i=0; i < this.stack2.length; i++) {
            this.stack1.push(this.stack2.pop())
        }
        this.stack1.push(value);
    }
}

//9. Square dance pairing

//10. Ophidian Bank