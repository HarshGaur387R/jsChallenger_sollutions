function myFunction(arr = []) {
    // let arr2 = [];
    // if((arr[0].a + arr[0].b) > (arr[1].a + arr[1].b)){
    //     arr2[0] = arr[0];
    //     arr[0] = arr[1];
    //     arr[1] = arr2[0];
    // }
    // return arr;

    const sort = (a1, a2) => a1.b - a2.b;

    return arr.sort(sort);

}


console.log(myFunction([{ a: 2, b: 10 }, { a: 5, b: 4 }]));
