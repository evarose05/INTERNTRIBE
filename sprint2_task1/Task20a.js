var x = [-27, 42, -6, 45, -7, 1, -48, -20, -8];
var positive = [];
var negative = [];
for (var i = 0; i < x.length; i++) {
    if(x[i]>=0) 
    {
        positive.push(x[i]);
    } 
    else 
    {
        negative.push(x[i]);
    }
}
console.log("Positive:", positive);
console.log("Negative:", negative);
