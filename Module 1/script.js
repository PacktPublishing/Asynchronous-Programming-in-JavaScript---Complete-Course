//Settimeout example 
console.log("One");
console.log("Two");
setTimeout(function(){
	console.log("Three");
},2000); //delay of 2 seconds – it receives a callback function (I’ll explain later) that’ll run after the given delay. 
console.log("Four");
console.log("Five");


