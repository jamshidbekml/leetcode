/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n == 0) return arr

    let res = []

    const helper = function(list, depth) {
        for(const item of list) {
            if(typeof(item) == 'object' && depth < n) {
                helper(item, depth + 1)
            } else res.push(item)
        }
        return res
    }

    return helper(arr, 0)
};