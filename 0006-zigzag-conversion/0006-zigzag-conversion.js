/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s
    
    let arr = []
    let index = 0
    let reverse = false
    for(let i = 0; i < s.length; i++) {
        arr[index] = arr[index] ? arr[index] + s[i] : s[i]

        if(index + 1 == numRows) reverse = true
        if(index == 0) reverse = false

        reverse ? index -= 1 : index += 1
    }

    return arr.join('')
};