function myFunction(a,b) {

    // for (const key in obj) {
    //     if (Object.hasOwnProperty.call(obj, key)) {
    //         obj[key] = obj[key] * num;
    //     }
    // }

    // return obj;

    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));