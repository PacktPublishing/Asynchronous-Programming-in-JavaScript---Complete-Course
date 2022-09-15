'use strict';
function styleThePage(link, callback) {
	let style = document.createElement('link');
	style.rel = 'stylesheet';
	style.href = link;
	console.log(style);
	style.onload = () => callback(null,style);
	style.onerror = () => callback(new Error(`Check your link: ${link}`));
								   
	document.head.append(style);
}
styleThePage('style.css',(error,style) => {
	if(style) {
		console.log("Stylesheet was created and loaded successfully!");
	}
	else {
		console.log(error);
		//code to handle the error 
	}
});
