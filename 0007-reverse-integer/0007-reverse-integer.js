/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isPositive = x > 0 ? 1 : -1;
    x = Math.abs(x).toString();
    for (let i = 0; i < Math.floor(x.length / 2); i++) {
        x =
            x.slice(0, i) +
            x[x.length - 1 - i] +
            x.slice(i + 1, x.length - 1 - i) +
            x[i] +
            x.slice(x.length - i);
    }

    x = (x - 0) * isPositive;

    if (x > 2 ** 31 || x < (-2) ** 31) return 0;
    return x;
};