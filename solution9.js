// 09: How do you check if two strings are anagrams of each other?

// export let areAnagramsOfEachOther = (word1: string, word2: string): boolean => {


    export const compareAnagrams = function(firstWord, secondWord) {
        if (firstWord.length != secondWord.length) return false;
        firstWord = firstWord.toLowerCase().split("").sort().join("");
        secondWord = secondWord.toLowerCase().split("").sort().join("");
        for (let i = 0; i < firstWord.length; i++) {
            if ((firstWord.charAt(i)) != (secondWord.charAt(i))) {
                return false;
            }
        }
        return true;
    };