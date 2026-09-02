// Question 1
function describeValue(value){
    const type = typeof value;
    let truthyOrFalsy = null;

    if(value){
        truthyOrFalsy =  "truthy";
    }else{
        truthyOrFalsy =  "falsy";
    }

    return  `${type} | ${truthyOrFalsy}`;
}


// Question 2
