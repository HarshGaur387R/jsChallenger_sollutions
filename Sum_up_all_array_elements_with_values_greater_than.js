function myFunction(a = [], b) {

    return a.reduce((pre, cur) => cur > b ?pre + cur : pre,0);

}

console.log(myFunction([78, 99, 100, 101, 401], 99));