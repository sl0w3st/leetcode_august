/**
https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3409/
 */
var detectCapitalUse = function(word = "") {
    return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
};
