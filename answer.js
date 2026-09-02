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


// Question 3
function validateUsername(username) {
    
    if(username.length < 4){
        return "Too Short";
    }else if(username.includes(" ")){
        return "No Space Allowed";
    }else if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }else{
        return "Available";
    }

}