var a=4,b= 7;
var temp=a;
a=b;
b=temp;
console.log("Swap using temp:",a,b);
a=a+b;
b=a-b;
a=a-b;
console.log("Swap without temp:",a,b);