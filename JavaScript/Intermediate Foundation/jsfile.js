//1-
function sigma(num){
    var sum=0;
    for(var i=0;i<=num;i++){
        sum+=i;
    }
    return sum;
}


//2-
function factorial(num){
    var fact=1;
    for(var i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}
//3-
function fibonacci(num){
    var seq=[0,1,1];
    for(var i=3;i<=num;i++){
        seq.push(seq[i-1]+seq[i-2]);

    }
    console.log(seq[num]);
    return seq[num];
    
}


//4-
function arraySecondTolast(arr){
    var StL;
    if(arr.length<2){
        Stl=null;
    }else{
        Stl=arr[arr.length-2]
    }
    console.log(Stl);
    return Stl;
}
//5-
function NthLast(arr,n){
    var Nth;
    if(n>arr.length){
        Nth=null
    }else{
        Nth=arr[arr.length-(n+1)];
    }
    console.log(Nth);
    return Nth;
}
//6-
function SecondLargest(arr){
    var max=arr[0];
    var second;
    if(arr.length<2){
        return null
    }else if(arr[i]>max){
        second=max;
        max=arr[i];
    }else if(arr[i]>sec && arr[i]<max){
        second=arr[i]
    }
    return second;
}
//7-
function DoubleTrouble(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i])
        newArr.push(arr[i])
    }
    for(var i=0;i<newArr.length;i++){
        arr[i]=newArr[i];
    }
    console.log(arr);
    return arr;
}
