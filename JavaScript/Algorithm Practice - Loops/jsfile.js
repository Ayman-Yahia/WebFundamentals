//print odds 1-20
//Print out all odd numbers from 1 to 20
//The expected output will be:

function printOdds(){
    for (var i=1;i<=20;i+=2){
            console.log(i);
    }
}
// output=1,3,5,7,9,11,13,15,17,19,100

//Sum and Print 1-5
//Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
//The expected output will be:
var sum=0;
function sum5(){
    for(var i=1;i<=5;i++){
        console.log(i);
        sum+=i;
        console.log(sum);
    }
}
sum5();
//The expected output will be: 
//i: 1, Sum: 1
//i: 2, Sum: 3
//i: 3, Sum: 6 
//i: 4, Sum: 10
//i: 5, Sum: 15