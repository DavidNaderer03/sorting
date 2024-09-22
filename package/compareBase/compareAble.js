class CompareAble {
    /*
    *
    *
    * @param {any}         left value of the comparison
    * @param {any}         right value of the comparison
    * @param {function}    a method that returns the value if you have an object for example
    * @comparer {function} a method for custom comparing of left and right
    *
    * @constructor
    */
    constructor(left, right, extractValue, comparer) {
        this.left = left;
        this.right = right;
        this.#typeCheck();
        this.extractValue = extractValue;
        this.comparer = comparer;
    }

    /*
    *
    * checks if the types are the same. If not it throws an error
    *
    * @return {void}
    */
    #typeCheck() {
        if(this.left.constructor !== this.right.constructor) {
            throw new Error("Types are not the same");
        }
    }

    /*
    *
    * compares the values
    *
    * @return {boolean}         returns true if the same; otherwise false
    */
    compare() {
        const left = this.extractValue(this.left);
        const right = this.extractValue(this.right);
        return this.comparer(left, right);
    }
}

module.exports = CompareAble;