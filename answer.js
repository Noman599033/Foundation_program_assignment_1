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
function getDayType(day){
    let letterCase = day.toLowerCase();

    switch(letterCase) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}