"use strict";




//call back function

function sendMessasge(user, callback){
    console.log(`сообщение отправлено пользователю ${user}`);   
    callback(); 
}

function checkUser(){
   let user = true;
    if (user != false){
        console.log("добро пожаловать");
    }else{
        console.log("пройдити верификацию");
    }
}

sendMessasge("Boris", checkUser);
