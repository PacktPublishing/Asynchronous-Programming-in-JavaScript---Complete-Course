let data;
function fetchData(callback) {
	setTimeout(()=>{
		//data fetch is happening here after 3000 seconds - simulation - let's say it takes 3 seconds or 3000 milliseconds
		data = "Here is the data";
		callback(data,new Error('The data was not fetched!')); //so this is the original function – there is the data, and a callback that sends data as well as an error. But it won’t work here because we are going to define the callback within our promise
	},3000);
}
//fetchData(() => console.log(data)); //This was the original call to the function with the callback inside – let’s comment it out because we won’t be using it anymore. 

 //Create a promise wrapper called fetchDataPromise which is what we’ll call from now on 
function fetchDataPromise() { //does not accept callback but returns promise
	return new Promise(function(resolve,reject){
		//make the fetchData function do everything and send a callback inside of it, just like before, but this time, it’s going to also use resolve and reject
		fetchData((data,error) => { //callback
			if(data) {
				resolve(data);
			}
			else {
				reject(error);
			}
		});
	});
}

fetchDataPromise()
	.finally(() => console.log("Your promise is ready"))
	.then(result => console.log(result))
	.catch(error => console.log(error));
