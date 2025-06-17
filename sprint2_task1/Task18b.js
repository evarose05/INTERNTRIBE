var numbers = [10, 20, 30, 40];
var sum = 0;
for (var i = 0; i < numbers.length; i++) 
    {
    sum += numbers[i];
}
var avg = sum / numbers.length;
console.log("Average:", avg);