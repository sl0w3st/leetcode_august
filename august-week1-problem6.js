/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.words = [];
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(this.words[word.length] === undefined)
        this.words[word.length] = [];
    this.words[word.length].push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const regex = new RegExp('^'+word.replace('.', '[a-z]')+'$', 'g');
    let curr_words = this.words[word.length];
    if(curr_words != undefined)
    {
        for(let item of this.words[word.length])
        {
            if(item.match(regex))
                return true;
        }
    }
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
