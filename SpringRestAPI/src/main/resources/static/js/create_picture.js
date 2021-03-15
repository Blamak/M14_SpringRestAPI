// REGISTER NEW PICTURE

function createPicture() {

	// get shop id from url
	const url = window.location.href;
	const idPosition = url.indexOf('?shopId'); // position of question mark in the url
	const shopId = url.substring(idPosition + 8) // slice url to get the shop's id

	// retrieve form data (title and author)
	const title = document.getElementById('title').value.trim();
	const author = document.getElementById('author').value.trim();
	
	// empty field error messages
	try {
		if (title == '') {
			throw 'Title field is mandatory'
		}
		if (author == '') {
			throw `Introduce artist name`;
		}
	} catch (error) {
		alert(error);
		return;
	}
	
	// prepare and send request
	const data = {
		title: title,
		author: author,
	};
	const params = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data)
	}
	const urlRequest = `/shops/${shopId}/pictures`;

	fetch(urlRequest, params)
		.then(response => {
			return response.json()
		})
		.then(() => {
			// back to previous page
			history.go(-1);
		})
		.catch((error) => {
			alert(error)
		})
}