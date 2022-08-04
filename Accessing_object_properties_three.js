function myFunction(obj={},key){

    return obj[key];
}

console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'));