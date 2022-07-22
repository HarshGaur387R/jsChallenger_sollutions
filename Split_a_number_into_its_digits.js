function myFunction(a = 0){
    let stringArray =  a.toString().split("");
    let numberArray =  stringArray.map(s => {
        return Number(s);
    });
    return numberArray;
}

console.log(myFunction(1220));