class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.unshift(element)
    }

    dequeue() {
        const element = this.items.pop()
        return element
    }
    peek() {
        if (this.items.length != 0) {
            return this.items[this.items.length - 1]
        }
        return null
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.ïtems)
    }
    isEmpty() {
        return this.items.length === 0
    }
}
