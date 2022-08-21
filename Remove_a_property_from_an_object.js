function myFunction(obj){

    //  This is also a solution but the below solution is syntax friendly.

    // let obj2 = {};

    // for (const key in obj) {
    //     if(key != 'b'){
    //         obj2[key] = obj[key];
    //     }
    // }

    // return obj2;

    const {b,...rest} = obj;
    return rest;
   
}

console.log(myFunction({ a: 1, b: 7, c: 3 }));