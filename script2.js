"use strict";

function fillArr(arr, callback){
    for(let i = 0; i < 10; i++){
        arr[i] = i;
    }
    callback();
}

function showResult(){  
    for(let key of arr){
        console.log(`key:${key}, value: ${arr[key]}`);
    }
}

let arr = [];
fillArr(arr, showResult);