class Point {
    /*
    *
    * @param {number}  x    the x value of the point
    * @param {number}  y    the y value of the point
    *
    *@constructor
    */
    constructor(x, y) {
        if(this.#checkTypeIfInvalid(x, y)) {
            throw new InvalidNumberError()
        }
        this.x = x;
        this.y = y;
    }

    /*
    *
    * check if the points where invalid
    *
    * @param {number}  x    the x value of the point
    * @param {number}  y    the y value of the point
    * @return {boolean}     returns true if one of them is no number; otherwise false
    */
    #checkTypeIfInvalid(x, y) {
        return  isNaN(x) ||
                isNaN(y);
    }
}

module.exports = Point;