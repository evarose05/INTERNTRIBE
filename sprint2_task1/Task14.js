var age = 19;
var message;
if (age<16) 
    {
    message = "You can't drive";
    } 
    else if(age<=17) 
    {
    message = "You can drive but not vote";
    } 
    else if(age<=24) 
    {
    message = "You can vote but not rent a car";
    } 
    else 
    {
    message = "You can do pretty much anything";
}

console.log("Message:", message);