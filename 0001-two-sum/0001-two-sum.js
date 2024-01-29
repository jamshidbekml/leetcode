/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}

    for( let i=0; i < nums.length; i++) {
        let last = target - nums[i]

        if(obj[last] != undefined) {
            return [obj[last], i]
        }
        
        obj[nums[i]] = i
    }
};