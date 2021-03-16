// REGISTER NEW SHOP

function createShop() {
	// retrieve form data - name and capacity
	const name = document.getElementById('name').value.trim();
	const capacity = parseFloat(document.getElementById('capacity').value.trim()); // parseFloat() to allow and remove insignificant zeros

	// handling form's error messages
	try {
		// empty-field cases
		if (name == '') {
			throw 'Name field is mandatory'
		}
		if (capacity == '') {
			throw `Introduce shop's capacity`;
		}

		// case capacity not a number / with decimals / negative value
		if (isNaN(capacity) || capacity % 1 != 0 || capacity < 0) {
			throw `Capacity must be a positive integer number (no decimals)`;
		}
		
		// establish maximum capacity
		if (capacity > 100_000) {
			throw 'Maximum capacity: 99.999'
		}
	} catch (error) {
		alert(error);
		return;
	}
	
	// prepare and send request
	const data = {
		name: name,
		capacity: capacity
	};
	const params = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data)
	}
	const url = '/shops/';

	fetch(url, params)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw "error in ajax request";
			}
		})
		.then(() => {
			// redirect to index page 
			window.location.href = 'http://localhost:9292/';
		})
		.catch((error) => {
			alert(error)
		})
}