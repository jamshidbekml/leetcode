/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(this.length !== rowsCount*colsCount) {
        return []
    } else {
        let result = []
        let down = true
        let row = 0

        for (let i = 0; i < this.length; i++) {
            if (i != 0 && i % rowsCount == 0) {
                down = !down;
            }

            if (down && row < rowsCount) {
                result[row]
                    ? result[row].push(this[i])
                    : (result[row] = [this[i]]);
                row++;
            } else if (!down) {
                row--;
                result[row].push(this[i]);
            }
        }

        return result
    }
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */