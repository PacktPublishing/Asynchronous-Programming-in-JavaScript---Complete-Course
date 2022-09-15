'use strict';
function styleThePage(link) {
	return new Promise(function(resolve,reject) {
		let style = document.createElement('link');
		style.rel = 'stylesheet';
		style.href = link;
		style.onload = () => resolve(style);
		style.onerror = () => reject(new Error('Page load failed!'));
		document.head.append(style);
	});
}

styleThePage('style.css')
	.finally('Promise done')
	.then(result => console.log('Page loaded'))
	.catch(error => console.log(error));

console.log('Which executes first?');
