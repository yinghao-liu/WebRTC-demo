#!/usr/bin/node

function executor1(resolve,reject) {
  console.log("in executor1");
  
  reject('failed1');
  resolve('success1');
  reject('failed1');
}

function executor1_succ_callback(value) {
  console.log("aaaaa" + value);
}

function executor1_failed_callback(value) {
  console.log("bbbbb" + value);
}


const p1 = new Promise(executor1);
console.log("after new and before then");
p1.then(executor1_succ_callback, executor1_failed_callback);
/*
const p2 = new Promise(function(resolve,reject){  
  resolve('success3'); 
  reject('reject');
});
p1.then(function(value){  
  console.log(value); // success1
});
p2.then(function(value){ 
  console.log(value); // success3
});
*/







