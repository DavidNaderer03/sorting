class Search {
    /*
    *
    * @param {array} array      the array to handle
    *
    * @constructor
    */
    constructor(array) {
        if(!this.#typeCheck(array)) {
            throw new Error("Invalid type");
        }
        this.array = array;
    }

    /*
    *
    * the method checks if it is a 2d array
    *
    * @param {array} array      the array to check if it is a 2d array
    * @return {void}
    */
    #typeCheck(array) {
        try {
            return Array.isArray(array) && array[0] && Array.isArray(array[0]);
        } catch (e) {
            return false;
        }

    }

    /*
    *
    * the method checks if a point is inside the grid
    *
    * @param {Point} point  a point that describes x and y
    * @return {boolean}     returns true if the point is inside the grid; otherwise false if the points is not inside
    */
    contain(point) {
        return point.x >= 0 && point.x < this.array[0].length &&
               point.y >= 0 && point.y < this.array.length;
    }

    /*
    *
    * checks if a field exists in an object
    *
    * @param {string} field the field which should exists or not in the object
    * @param {object} obj   the object which should be proved
    * @return {boolean}     returns true if the field exists; otherwise false if it not exists
    */
    #checkIfExists(obj, field) {
        return obj[field] !== undefined;
    }

    /*
    *
    * compares the values in a default way
    *
    * @param {any} excepted     the value in the array which should be the same
    * @param {Point} point      the point which should proved
    * @return {boolean}         returns true if the value is the excepted value; otherwise false
    */
    equals(point, excepted) {
        return this.array[point.x][point.y] === excepted;
    }

    /*
    *
    * search for element in 2d array
    *
    * @param {function} query       the query which checks the single values as callback
    * @return {any}                 returns the result you want as its type
    */
    search(query) {
        let finallyResult;
        this.array.find(x => {
            let result = x.find(query);
            if(result)
                finallyResult = result;
        });
        return finallyResult;
    }
}

exports = module.exports = Search;