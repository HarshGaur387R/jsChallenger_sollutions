function myFunction(a = {}) {

    let sum = 0;
    for (const key in a) {
        sum += a[key];
    }
    return sum;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));
