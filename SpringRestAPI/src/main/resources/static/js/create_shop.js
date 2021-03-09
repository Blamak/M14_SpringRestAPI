// REGISTER NEW SHOP
function createShop() {
	// retrieve form data, name and capacity
	const name = document.getElementById('name').value.trim();
	const capacity = document.getElementById('capacity').value.trim();

	try {
		if (name == '') {
			throw 'Name field is mandatory'
		}
		if (capacity == '') {
			throw `Introduce shop's capacity`;
		}
		if (isNaN(capacity)) {
			throw `Capacity must be a number`;
		}
	} catch (error) {
		alert(error);
		return;
	}

	const data = {
		name: name,
		capacity: capacity
	};

	const url = '/shops/save';

	const params = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data)
	}

	// enviar la peticion
	fetch(url, params)
		.then(response => {
			return response.json()
		})
		.then(() => {
			window.location.href = 'http://localhost:8181/';
		})
		.catch((error) => {
			alert(error)
		})
}