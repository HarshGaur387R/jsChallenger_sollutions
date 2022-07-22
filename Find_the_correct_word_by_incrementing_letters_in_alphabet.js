function myFunction(str = ""){
    
    let result = "";
    for(let i =0; i<str.length; i++){
        result += String.fromCharCode(str.charCodeAt(i)+1);
    }

    return result;

}



console.log(myFunction("bnchmf"));