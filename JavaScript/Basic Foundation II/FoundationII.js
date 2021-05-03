//1
function Big(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "Big";
        }
    }

    return arr;
}

//2
function LowHigh(arr) {
    var high = arr[0];
    var low = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
        if (arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(low)
    return high;
}

//3
function Another(arr) {
    var secondToLast = arr[arr.length - 2];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            firstOdd = arr[i];
            break;
        }
    }

    console.log(secondToLast);
    return firstOdd;
}
//4
function double(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

//5
function positives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += 1;
        } 
    }
    arr[arr.length - 1] = count;
    return arr;
}
//6

function evenandOdds(arr) {
    var oddsCounter = 0;
    var evensCounter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) { 
            continue;
        } else if (arr[i] % 2 != 0) { 
            oddsCounter += 1;
            if (oddsCounter === 3) {
                console.log("That's odd!");
                oddsCounter = 0;
            }
        } else {  
            evensCounter += 1;
            if (evensCounter === 3) {
                console.log("Even more so!");
                evensCounter = 0;
            }
        }
    }
}

//7 
function seconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

//8
function prelengths(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i].length;
    }
    for (var n = 1, x = 0; n < arr.length; n++, x++) {
        arr[n] = newarr[x];
    }

    return arr;
}

//9
function addSevenToMost(arr) {
    var newArr = [];
    newarr[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        newarr[i] = arr[i] + 7;
    }
    return newarr;
}

//10
function reverseArray(arr) {
    var temp = [];
    for (var i = arr.length-1; i >= 0; i--) {
        temp.push(arr[i]);
    }
    for(var i=0; i<arr.length;i++){
        arr[i]=temp[i];
    }
    console.log(arr)
    return arr;
}
//11
function ngatives(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]*-1;
    }
    return newArr;
}
//12
function alwaysHungry(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'Food') {
            console.log('Yummy');
            count += 1;
        }
    }
    if (count === 0) {
        console.log("I'm hungry");
    }
    return;
}

//13
function swapTowardsCenter(arr) {
    var temp = arr[0];
    var temp1=arr[arr.length-1]
    var temp2=arr[2];
    var temp3=arr[arr.length-3]
    arr[arr.length-1]=temp;
    arr[0]=temp1
    arr[arr.length-3]=temp2
    arr[2]=temp3
    console.log(arr);
    return arr;
}

swapTowardsCenter([1,2,3,4,5,6])

//14
function scaleArray(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * y;
    }
    return arr;
}







