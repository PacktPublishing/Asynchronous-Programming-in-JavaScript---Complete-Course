//Asynchronous programming
//ES7 - Async Await - pretty promises - syntactic sugar for promises
//Mini project #3

'use strict';

async function styleThePage(link) {
	let promise = new Promise(function(resolve,reject) {
		let style = document.createElement('link');
		style.rel = 'stylesheet';
		style.href = link;
		style.onload = () => resolve(style);
		style.onerror = () => reject(new Error('Page load failed!'));
		document.head.append(style);
	})
	console.log('Yet to load');
	let result = await promise; 
	console.log(result);
}

console.log('Hello there!');
styleThePage('style.css');
console.log('Which executes first?');


