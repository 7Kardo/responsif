
var grades = [14.5,18,17,16.75,15,12,19,18.25,10,20];
let sum = 0 ;
for (var i=0 ;i<grades.length; i++){
    sum += grades[i] ;
}
var average = sum/grades.length;
console.log(average)