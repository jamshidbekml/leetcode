/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(this.length !== rowsCount*colsCount) {
        return []
    } else {
        let result = new Array(rowsCount).fill(0).map(() => new Array(colsCount).fill(0))
        let isReversed = true

        for (let i = 0; i < this.length; i++) {
            const row = isReversed ? i % rowsCount : rowsCount - 1 - (i % rowsCount)
            const col = Math.floor(i / rowsCount)
            
            result[row][col] = this[i]
            
            if ((i % rowsCount) === rowsCount - 1) {
                isReversed = !isReversed;
            }
        }

        return result
    }
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */