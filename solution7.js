// 07: How do you reverse an array in place in Javascript?

export let reverseWordsInSentence = (reverseString: string): string => {
    return reverseString.split(" ").reverse().join(" ");
};

//how i would do it