// REGISTER NEW PICTURE

function createPicture() {
	
	// get shop id from url
	const url = window.location.href;
	const position = url.indexOf('?shopId'); // position of question mark in the url
	const shopId = url.substring(position + 8) // slice url to get the shop's id

	// retrieve form data (title and author)
	const title = document.getElementById('title').value.trim();
	const author = document.getElementById('author').value.trim();

	try {
		if (title == '') {
			throw 'Name field is mandatory'
		}
		if (author == '') {
			throw `Introduce shop's capacity`;
		}
	} catch (error) {
		alert(error);
		return;
	}

	const data = {
		title: title,
		author: author,
	};

	const urlRequest = `/shops/${shopId}/pictures`;

	const params = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data)
	}

	// enviar la peticion
	fetch(urlRequest, params)
		.then(response => {
			return response.json()
		})
		.then(() => {
			window.location.href = `http://localhost:8181/views/show-pictures.html?shopId=${shopId}`;
		})
		.catch((error) => {
			alert(error)
		})
}