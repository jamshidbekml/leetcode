/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false

    x += ''
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== x[x.length - 1 - i]) return false
    }

    return true
};