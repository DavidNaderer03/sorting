class CompareAble {
    constructor(left, right, extractValue, comparer) {
        this.left = left;
        this.right = right;
        this.#typeCheck();
        this.extractValue = extractValue;
        this.comparer = comparer;
    }

    #typeCheck() {
        if(this.left.constructor !== this.right.constructor) {
            throw new Error("Types are not the same");
        }
    }

    compare() {
        const left = this.extractValue(this.left);
        const right = this.extractValue(this.right);
        return this.comparer(left, right);
    }
}

module.exports = CompareAble;