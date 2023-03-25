class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        const element = this.items.pop()
        return element
    }
    peek() {
       return this.items[this.items.length - 1]
    }
    isEmpty() {
        if (this.items.length == 0) {
            return true
        }
        return false
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items)
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())
stack.print()
