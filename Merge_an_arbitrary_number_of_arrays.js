function myFunction(...arrays){

    // let array = [];

    // arrays.forEach((a,index)=>{
    //    array = array.concat(a);
    // });
    
    // return array;

    return arrays.flat();
}



console.log(myFunction([true, true], [1, 2], ['a', 'b']));