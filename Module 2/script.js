//callback example 
let clickCount = 0;
let button = document.getElementById("button");
button.addEventListener("click",() => {
	buttonClick(clickOutput);
}); 
function buttonClick(callback) {
	clickCount++;
	callback();
}
function clickOutput() {
	console.log(clickCount);
}

//setimeout fetch example
let data;
function fetchData(callback) {
	setTimeout(()=>{
		//data fetch is happening here after 3000 seconds - simulation - let's say it takes 3 seconds or 3000 milliseconds
		//data fetch code
		data = ""; //example
		if(data) { //data is fetched
			callback(null,data);
		}
		else {
			callback('error',data);
		}
		
	},3000);
}
fetchData((error,data) => {
	if(error) {
		//actual code to handle the error would be here
		console.log(new Error('Data fetch failed'));
	}
	else {
		console.log(data);
	}
});

