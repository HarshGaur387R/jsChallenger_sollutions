function myFunction(arr=[],num=0){

    return [...(num>=6?[num]:[0]),...arr];

    // arr.unshift(num >= 6 ? num: 0);
    // return arr;

}


console.log(myFunction(['a','b'], 2));