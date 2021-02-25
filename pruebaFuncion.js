'use strict';

const paddingLeft = (word, noCharacters, padding) => {
    let wordCount = word;

    wordCount = wordCount.padStart(noCharacters, padding);
    return wordCount;
};

module.exports = { paddingLeft };


















