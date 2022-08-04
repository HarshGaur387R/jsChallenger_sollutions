function myFunction(a = [], b = []) {


    // a = a.concat(b);

    // return a.filter((e, index) => {
    //         return a.indexOf(e) === index;
    //         }).sort((a,b)=>a-b);

    return [...new Set([...a, ...b])].sort((a, b) => a - b);

}


console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));