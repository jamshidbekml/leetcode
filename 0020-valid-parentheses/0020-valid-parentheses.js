/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 != 0) return false

    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.unshift(s[i])
        } else {
            if(s[i] == ')' && stack[0] == '(' || s[i] == '}' && stack[0] == '{' || s[i] == ']' && stack[0] == '[') {
                stack.shift()
                continue
            }
            return false
        }
    }

    return stack.length == 0
};