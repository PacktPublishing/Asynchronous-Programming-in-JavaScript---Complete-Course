async function fetchData() {
	let data;
	let promise = new Promise((resolve,reject) => {	
		setTimeout(() => {
			data = 'This is your data';
			if(data) {
				resolve(data);
			}
			else {
				reject(new Error('Data could not be fetched!'));
			}
		});
	});
	try {
		let result = await promise; 
		console.log(data); //put the console inside so it executes if there is a resolve
	} catch(error) {
		console.log(error); //if rejected, this executes
	}
}
fetchData();
