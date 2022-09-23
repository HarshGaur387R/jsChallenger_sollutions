function myFunction(x,y){

    // let value = obj2.b;
    // delete obj2.b;
    // obj2.d = value;

    // return {...obj1,...obj2}

    const {b,...NotB} = y;
    return {...x,...NotB,d:b}

}


console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));