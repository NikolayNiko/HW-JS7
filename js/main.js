
let arr1 = [-152, 17, -1, 55];
let arr2 = [-59, 44448, -568];
let arr3 = [1, 2, 598, 65, 0, 13];

console.log('Мінімальні значення массивів');
console.log(getMin(arr1)); 
console.log(getMin(arr2));
console.log(getMin(arr3));

console.log('Максимальні значення массивів');
console.log(getMax(arr1));
console.log(getMax(arr2));
console.log(getMax(arr3));

console.log('Сума значень массивів');
console.log(getSum(arr1));
console.log(getSum(arr2));
console.log(getSum(arr3));




function getSum(arr){
    let sum=0;
    for(let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

function getMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++ ){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function getMin(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}