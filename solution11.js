// 11: How do you check if a given string is a palindrome?

const checkPalindrome = (word) => {
    let l = word.length
    for(let i = 0; i<l/2; i++) {
        if(word.charAt(i) !== word.charAt(l-1-i)){
            return false;
        }
    }
    return true;
}

if (checkPalindrome("1122332211")) { 
    console.log("The word is a palindrome");
} else {
    console.log("The word is NOT a palindrome");
}