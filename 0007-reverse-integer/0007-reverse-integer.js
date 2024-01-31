/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let helper = function(num) {
        if (Math.abs(num) < 10) return num;
        return (
            (num % 10) * 10 ** (Math.abs(num).toString().length - 1) +
            helper(Math.round(num / 10 - (num % 10) / 10))
        );
    }
    
    let res = helper(x)
    
    if(res > 2**31 || res < (-2)**31) return 0
    return res
};