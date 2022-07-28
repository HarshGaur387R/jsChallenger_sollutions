// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function myFunction(a = []) {
    let count = 0;
    a.forEach((e) => {
        if (e < 0) {
            ++count;
        }
    });

    return count;
}

console.log(myFunction([1, -2, 2, -4]));