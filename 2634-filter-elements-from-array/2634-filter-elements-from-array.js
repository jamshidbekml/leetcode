/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        let condition = fn.call(this, arr[i], i)
        if(condition) result.push(arr[i])
    }
   
    return result
};