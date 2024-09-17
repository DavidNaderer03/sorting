class SearchBase {
    constructor(array, arrayDimension) {
        const dimension = arrayDimension ? arrayDimension : '1';
        if(!this.#typeCheck(dimension, array)) {
            throw new Error("Invalid type");
        }
        this.#array = array;
    }
    #typeCheck(dimension, array) {
        if(dimension === '1') {
            return array.isArray();
        } else if(dimension === '2') {
            return array.isArray() && array[0] && array[0].isArray();
        }
    }
}

module.exports = SearchBase;