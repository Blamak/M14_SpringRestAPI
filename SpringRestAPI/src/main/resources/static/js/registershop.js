// ALTA TIENDA

function registerShop() {
	// recuperar los datos del formulario
	let nameForm = document.getElementById('name').value.trim();
	let capacityForm = document.getElementById('capacity').value.trim();

	try {
		if (nameForm == '') {
			throw 'Name field is mandatory'
		}
		if (capacityForm == '') {
			throw `Introduce shop's capacity`;
		}
		if (isNaN(capacityForm)) {
			throw `Capacity must be a number`;
		}
	} catch (error) {
		alert(error);
		return;
	}

	let data = {
		name: nameForm,
		capacity: capacityForm
	};

	let url = '/shops/save';

	let params = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data)
	}

	// enviar la peticion
	fetch(url, params)
		.then((response) => {
			//console.log(response.capacity)
			return response.json()
		})
		.then(() => {
			window.location.href = 'http://localhost:8181/';
		})
		.catch((error) => {
			alert(error)
		})
}