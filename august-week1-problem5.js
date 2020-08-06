/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    for(let i = 1; i <= num; i *= 4)
        if(i == num)
            return true;
    return false;
};
