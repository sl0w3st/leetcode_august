/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let ss = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    while(ss.length > 1)
    {
        if(ss.charAt(0)!=ss.slice(-1))
            return false;
        ss = ss.slice(1,-1);
    }
    return true;
};
