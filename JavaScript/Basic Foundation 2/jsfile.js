//1

function arm(arr){
    var arr=[] 
    for (var i=1;i<=255;i++){
        arr.push(i)
    }
    return arr;
}


//2
var sum=0
function sumeven(){
    for(var i=1;i<=1000;i++){
        if(i%2==0){
            sum+=i;
        }
    }
    return sum;
}

//3

function sumodd(){
    var sum=0
    for(var i=1;i<=5000;i++){
        if(i%2 !==0){
            sum+=i;
        }
    }
    return sum;
}

//4

function interArr(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}
//5
function findMax(arr){
    var max=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
//6
function findavg(arr){
    var sum=0
    var avg
    for(var i=0;i<arr.length;i++){
        sum+=i
    }
    avg=sum/arr.length
    return avg
}

//7
function odds(){
    var arr=[]
    for(var i=1;i<=50;i++){
        if(i%2 !==0){
            arr.push(i)
        }
    }
    return arr
}

//8
function greatery(arr,y){
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>y){
            count++
        }
    }
    return count
}

//9
function square(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i]
    }
    return arr
}

//10
function negarr(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0
        }
    }
    return arr
}

//11
function maxminavg(arr){
    var sum=0
    var avg
    var max=arr[0]
    var min=arr[0]
    var arrNew=[]
    for(var i=0;i<arr.length;i++){
        sum+=i
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    avg=sum/arr.length
    arrNew.push(max)
    arrNew.push(min)
    arrNew.push(avg)
    return arrNew
}
//12

function swap(){
    var arrnew=[]
    var x=arr[0]
    var y=arr[(arr.length-1)]
    arrnew.push(y)
    for(var i=1;arr.length-1;i++){
        arrnew.push(arr[i])
    }
    arrnew.push(x)
    return arrnew
}

//13

function numtostring(){
    var arrnew=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo"
        }
    }
    return arr
}