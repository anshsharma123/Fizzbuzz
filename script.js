// FizzBuzz function
function fizzBuzz() {
    const result = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

// Test the FizzBuzz function and print the resulting array
const fizzBuzzArray = fizzBuzz();
console.log("FizzBuzz Array:", fizzBuzzArray);

// Given array of student scores
const scores = [85, 93, 78, 92, 88, 76, 95, 89];

// Step 1: Filter out scores below 80
const passingScores = scores.filter(score => score >= 80);

// Step 2: Add 5 bonus points to each passing score
const boostedScores = passingScores.map(score => score + 5);

// Step 3: Calculate the total class score by summing boosted scores
const totalClassScore = boostedScores.reduce((total, score) => total + score, 0);

// Test the work by printing the results
console.log("Passing Scores:", passingScores);
console.log("Boosted Scores:", boostedScores);
console.log("Total Class Score:", totalClassScore);

// Function to find maximum and minimum in an array
function findMaxMin(numbers) {
    // Step 1: Initialize variables for max and min
    let max = numbers[0];
    let min = numbers[0];

    // Step 2: Loop through the array
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; // Update max
        }
        if (numbers[i] < min) {
            min = numbers[i]; // Update min
        }
    }

    // Step 3: Return both values
    return { max, min };
}

// Test the function with different arrays
const testArray1 = [12, 5, 7, 19, 3, 45, 22];
const result1 = findMaxMin(testArray1);
console.log(`Array: ${testArray1} | Max: ${result1.max}, Min: ${result1.min}`);

const testArray2 = [-10, -5, -3, -1, 0, 1, 2, 3, 5];
const result2 = findMaxMin(testArray2);
console.log(`Array: ${testArray2} | Max: ${result2.max}, Min: ${result2.min}`);

const testArray3 = [100, 200, 50, 0, 75];
const result3 = findMaxMin(testArray3);
console.log(`Array: ${testArray3} | Max: ${result3.max}, Min: ${result3.min}`);
