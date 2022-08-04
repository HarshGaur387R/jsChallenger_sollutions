function myFunction(arr = []){
    

    // return arr.reduce((acc, cur) => {
    //     const firstLetter = cur.toLowerCase().charAt(0);
    //     return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
    // }, {});

    let obj ={};

    arr.forEach((e,index)=>{
        if(Object.prototype.hasOwnProperty.call(obj, e.charAt(0).toLowerCase())){
        obj[e.charAt(0).toLowerCase()].push(e);
        }
        else{
        obj[e.charAt(0).toLowerCase()] = [e];
        }
    });

    return obj;
}


console.log(myFunction(['Berlin', 'Paris', 'Prague']));