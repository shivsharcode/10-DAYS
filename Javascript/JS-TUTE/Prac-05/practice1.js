// Create a function using the 'function' keyword that takes a string as an argument & returns the number of vowels in the string

function vowel_counter(str) {
    let vowelCount = 0;
    for (let i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            vowelCount++;
        }
    }

    return vowelCount;
}

// arrow function

const arrowVowelCounter = (str) => {
    let vowelCount = 0;
    for (let i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            vowelCount++;
        }
    }

    return vowelCount;
};
